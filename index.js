// variables
const w3_url = 'http://www.w3.org/2000/svg'
const { body } = document
body.style.overflow = 'hidden'

// functions
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))
const round = (number) => Math.round((number + Number.EPSILON) * 100) / 100
const pad_start0 = (string) => string.toString().padStart(2, '0')
const generate_id = () => Math.random().toString(16).slice(10)

// disable download button
const disable_download = (disabled) => {
  download_zip_button.disabled = disabled
}

const get_today_date = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const date = `${pad_start0(day)}.${pad_start0(month)}.${year}`
  return date
}

let scanimation_id
let grid_color = 'black'

// set up the html elements

const buttons = document.createElement('div')
buttons.id = 'buttons'
body.append(buttons)

// button to hide the grids
const hide_grid_button = document.createElement('button')
hide_grid_button.id = 'hide-grid-button'
hide_grid_button.classList.add('hidden')
hide_grid_button.textContent = 'Hide grid'
buttons.append(hide_grid_button)

hide_grid_button.addEventListener('click', () => {
  const is_grid_hidden = grids.classList.toggle('hidden')
  grid_slider.classList.toggle('hidden')
  grid_label.classList.toggle('hidden')
  hide_grid_button.textContent = is_grid_hidden ? 'Show grid' : 'Hide grid'
})

// button to switch the grid mode (hiders or cutouts)
const set_grid_mode_button = document.createElement('button')
set_grid_mode_button.id = 'set-grid-mode-button'
set_grid_mode_button.classList.add('hidden')
set_grid_mode_button.textContent = 'See cutouts'
buttons.append(set_grid_mode_button)

set_grid_mode_button.addEventListener('click', () => {
  const is_cutouts = grid_hiders.classList.toggle('hidden')
  grid_cutouts.classList.toggle('hidden')
  set_grid_mode_button.textContent = is_cutouts ? 'See hiders' : 'See cutouts'
})

// scanimation fixed settings
const render_padding_ratio = 0.15 // padding around the render image to have space to move the grid
const animation_axes = ['Horizontal', 'Vertical']
const resolutions = { 72: 0.352777778, 150: 0.169333333, 300: 0.084666667 } // conversion for 1 px in mm for each resolution

// scanimation customizable settings
let render_size = 500 // in pixels
let px_to_mm = resolutions['150'] // resolution of 150 dpi by default
let frames_interval = 50
let frames_amount
let loop_on = false
let slice_size = 2
let curves_smoothness = 5
let animation_axis = animation_axes[0]

const controls_panel = document.createElement('div')
controls_panel.id = 'controls-panel'
body.append(controls_panel)

// panel for video upload
const video_upload = document.createElement('div')
video_upload.id = 'video-upload'
video_upload.className = 'settings-panel'
video_upload_label = document.createElement('p')
video_upload_label.textContent = 'Video upload'
video_upload.append(video_upload_label)
controls_panel.append(video_upload)

// video element
const video = document.createElement('video')
video.crossOrigin = 'anonymous'
video.muted = true

let is_uploading_video = false
let extracted_frames = []
let max_extracted_frames_amount
const read_frames_interval = 0.034 // the interval between 2 frames when read with the MediaStreamTrackProcessor API

const set_frames_amount = () => {
  const single_video_frames_amount = video.duration / read_frames_interval
  max_extracted_frames_amount =
    Math.floor(single_video_frames_amount / frames_interval) + 1 // add 1 cause the first frame will be taken at time 0

  // init the frames amount value to 4 frames, or to the max extracted frames if it is less than 4
  if (!frames_amount) {
    frames_amount = Math.min(max_extracted_frames_amount, 4)
  }

  // if the current frames amount is higher than the max extracted frames, set it the the max extracted frames
  if (frames_amount > max_extracted_frames_amount) {
    frames_amount = max_extracted_frames_amount
  }

  // set the input value and the input max value
  frames_input.value = frames_amount
  frames_input.max = max_extracted_frames_amount
}

// button to upload_video a video
const upload_video_button = document.createElement('button')
upload_video_button.id = 'upload-video-button'
upload_video_button.append(video)

const upload_video_label = document.createElement('label')
const upload_video_label_text = document.createElement('div')
upload_video_label.append(upload_video_label_text)
upload_video_label_text.textContent = 'Upload a video'
upload_video_label.htmlFor = 'upload'
const upload_video_input = document.createElement('input')
upload_video_input.id = 'upload'
upload_video_input.name = 'upload'
upload_video_input.type = 'file'
upload_video_input.accept = 'video/*'

upload_video_input.addEventListener('change', async (event) => {
  is_uploading_video = true

  // get video from input: read, display it in the panel & extract frames
  const reader = new FileReader()
  if (event.target.files[0]) reader.readAsDataURL(event.target.files[0])
  reader.onload = async (event) => {
    // reset the extracted frames array
    extracted_frames = []

    // update the UI
    download_zip_button.style.display = 'none'
    scanimation_settings.style.display = 'none'
    upload_video_button.style.height = '150px'
    upload_video_input.disabled = true
    upload_video_label.style.cursor = 'default'
    upload_video_label_text.textContent = 'Reading video to extract frames...'

    // get the video src from the input & play it
    video.src = event.target.result
    await video.play()

    // read the video track & extract the frames
    if (window.MediaStreamTrackProcessor) {
      const [track] = video.captureStream().getVideoTracks()
      video.onended = () => {
        video.pause()
        video.currentTime = 0
        track.stop()
      }
      const processor = new MediaStreamTrackProcessor(track)
      const reader = processor.readable.getReader()

      // read each frame and save it as an image
      let frame_index = 0
      const read_video_chunk = () => {
        reader.read().then(async ({ done, value }) => {
          if (!value) return
          const bitmap = await createImageBitmap(value)
          extracted_frames.push(bitmap)
          frame_index++
          value.close()
          if (!done) read_video_chunk()
        })
      }

      read_video_chunk()
    } else {
      console.error("your browser doesn't support this API yet")
    }

    // wait for the video to play completely
    await sleep(video.duration * 1000)

    // update the UI once frames are loaded
    set_frames_amount()
    scanimation_settings.style.display = 'block'
    download_zip_button.style.display = 'block'
    upload_video_label_text.textContent = 'Upload a new video'
    upload_video_label.style.cursor = 'pointer'
    upload_video_input.disabled = false

    // set render sizes
    const { width, height } = extracted_frames[0]
    // calculate frame ratio according to the image orientation — vertical or horizontal
    const frame_ratio = height > width ? height / width : width / height
    render_width = render_size
    render_height = render_size * frame_ratio
  }
})

upload_video_button.append(upload_video_label)
upload_video_button.append(upload_video_input)
video_upload.append(upload_video_button)

// panel for scanimation settings
const scanimation_settings = document.createElement('div')
scanimation_settings.id = 'scanimation-settings'
scanimation_settings.className = 'settings-panel'
scanimation_settings_label = document.createElement('p')
scanimation_settings_label.textContent = 'Scanimation settings'
scanimation_settings.append(scanimation_settings_label)
controls_panel.append(scanimation_settings)
scanimation_settings.style.display = 'none'

// input to set the size of the render
const size = document.createElement('div')
const size_label = document.createElement('label')
size_label.htmlFor = 'render_size'
size_label.textContent = 'Dimensions in px'
const size_mm_label = document.createElement('span')
size_mm_label.textContent = `~ ${(render_size * px_to_mm).toFixed(2)} mm`
const size_input = document.createElement('input')
size_input.id = 'render_size'
size_input.type = 'number'
size_input.min = 200
size_input.max = 2000
size_input.value = render_size
size_input.addEventListener('input', (event) => {
  disable_download(true)
  render_size = Number(event.target.value)
  size_mm_label.textContent = `~ ${(render_size * px_to_mm).toFixed(2)} mm`
})
size.append(size_input)
size.append(size_label)
size.append(size_mm_label)
scanimation_settings.append(size)

// input to set the resolution of the render
const resolution = document.createElement('div')
const resolution_label = document.createElement('label')
resolution_label.htmlFor = 'resolution'
resolution_label.textContent = 'Render resolution in dpi'
const resolution_input = document.createElement('select')
resolution_input.id = 'resolution'
Object.keys(resolutions).map((resolution) => {
  const option = document.createElement('option')
  option.text = resolution
  resolution_input.append(option)
})
resolution_input.value = '150'
resolution_input.addEventListener('input', (event) => {
  disable_download(true)
  px_to_mm = resolutions[event.target.value]
  slice_mm_label.textContent = `~ ${(slice_size * px_to_mm).toFixed(2)} mm`
  size_mm_label.textContent = `~ ${(render_size * px_to_mm).toFixed(2)} mm`
})
resolution.append(resolution_input)
resolution.append(resolution_label)
scanimation_settings.append(resolution)

// input to set interval of frames to export
const interval = document.createElement('div')
const interval_label = document.createElement('label')
interval_label.htmlFor = 'frames_interval'
interval_label.textContent = 'Frames to extract interval'
const interval_input = document.createElement('input')
interval_input.id = 'frames_interval'
interval_input.type = 'number'
interval_input.min = 1
interval_input.max = 100
interval_input.value = frames_interval
interval_input.addEventListener('input', (event) => {
  disable_download(true)
  frames_interval = Number(event.target.value)
  set_frames_amount()
})
interval.append(interval_input)
interval.append(interval_label)
scanimation_settings.append(interval)

// input to set number of frames of the animation
const frames = document.createElement('div')
const frames_label = document.createElement('label')
frames_label.htmlFor = 'frames_amount'
frames_label.textContent = 'Frames amount'
const frames_input = document.createElement('input')
frames_input.id = 'frames_amount'
frames_input.type = 'number'
frames_input.min = 3
frames_input.max = 20
frames_input.value = frames_amount
frames_input.addEventListener('input', (event) => {
  disable_download(true)
  const value = Number(event.target.value)
  if (value > max_extracted_frames_amount) return
  frames_amount = value
})
frames.append(frames_input)
frames.append(frames_label)
scanimation_settings.append(frames)

// input to set loop mode
const loop = document.createElement('div')
loop.id = 'loop-control'
const loop_label = document.createElement('label')
loop_label.htmlFor = 'loop'
loop_label.textContent = 'Loop animation'
const loop_switch = document.createElement('div')
loop_switch.id = 'loop'
loop_switch.classList.add('switch')
loop_switch.value = loop_on
loop_switch.addEventListener('click', () => {
  disable_download(true)
  loop_on = !loop_on
  loop_switch.classList.toggle('active')
  loop_switch.value = loop_on
})
const loop_switch_dot = document.createElement('div')
loop_switch_dot.classList.add('switch-dot')
loop_switch.append(loop_switch_dot)
loop.append(loop_switch)
loop.append(loop_label)
scanimation_settings.append(loop)

// input to set size of one slice to cut the images
const slice = document.createElement('div')
const slice_label = document.createElement('label')
slice_label.htmlFor = 'slice_size'
slice_label.textContent = 'Slice size in px'
const slice_mm_label = document.createElement('span')
slice_mm_label.textContent = `~ ${(slice_size * px_to_mm).toFixed(2)} mm`
const slice_input = document.createElement('input')
slice_input.id = 'slice_size'
slice_input.type = 'number'
slice_input.min = 1
slice_input.max = 20
slice_input.value = slice_size
slice_input.addEventListener('input', (event) => {
  disable_download(true)
  slice_size = Number(event.target.value)
  slice_mm_label.textContent = `~ ${(slice_size * px_to_mm).toFixed(2)} mm`
})
slice.append(slice_input)
slice.append(slice_label)
slice.append(slice_mm_label)
scanimation_settings.append(slice)

// input to set direction of the animation
const direction = document.createElement('div')
const direction_label = document.createElement('label')
direction_label.htmlFor = 'animation_axis'
direction_label.textContent = 'Animation direction'
const direction_input = document.createElement('select')
direction_input.id = 'animation_axis'
animation_axes.map((direction) => {
  const option = document.createElement('option')
  option.text = direction
  direction_input.append(option)
})
direction_input.value = animation_axis
direction_input.addEventListener('input', (event) => {
  disable_download(true)
  animation_axis = event.target.value
})
direction.append(direction_input)
direction.append(direction_label)
scanimation_settings.append(direction)

const loader = document.createElement('div')
loader.id = 'loader'
loader.classList.add('hidden')
loader.textContent = 'Scanimating...'
body.append(loader)

// set render canvas to draw the scanimation image result
const render_canvas = document.createElement('canvas')
const render_context = render_canvas.getContext('2d')
render_canvas.id = 'render-canvas'
render_canvas.className = 'displayable-canvas hidden'
body.append(render_canvas)

// set container to draw the grids to animate the image result
const grids = document.createElement('div')
grids.id = 'grids'
grids.classList.add('hidden')

// set svg grid cutouts
const grid_cutouts = document.createElementNS(w3_url, 'svg')
grid_cutouts.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
grid_cutouts.classList.add('grid', 'hidden')
grid_cutouts.id = 'grid-cutouts'
grids.append(grid_cutouts)

// set svg grid printable
const grid_hiders = document.createElementNS(w3_url, 'svg')
grid_hiders.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
grid_hiders.classList.add('grid')
grid_hiders.id = 'grid-hiders'
grids.append(grid_hiders)

body.append(grids)

// create a grid slider to move the grid on top of the scanimation image
// and have an overview of the animation
const grid_slider = document.createElement('input')
grid_slider.id = 'grid-slider'
grid_slider.classList.add('hidden')
grid_slider.type = 'range'
grid_slider.min = -(slice_size * 10)
grid_slider.max = slice_size * 10
grid_slider.value = 0
grid_slider.step = slice_size / 10

const grid_label = document.createElement('label')
grid_label.id = 'grid-label'
grid_label.classList.add('hidden')
grid_label.textContent = `Slide here or scroll on the grid to move it & see the animation!`
body.append(grid_label)

let translate_grid = 0

// move the grid with the slider
grid_slider.addEventListener('input', (event) => {
  translate_grid = Number(event.target.value)
  const axis = animation_axis === 'Horizontal' ? 'X' : 'Y'
  grids.style.transform = `translate${axis}(${translate_grid}px)`
})

// move the grid on scroll
grids.addEventListener('mousewheel', (event) => {
  const step = Number(grid_slider.step)
  const inc = event.deltaY < 0 ? -step : step
  translate_grid += inc
  const axis = animation_axis === 'Horizontal' ? 'X' : 'Y'
  grids.style.transform = `translate${axis}(${translate_grid}px)`
  grid_slider.value = translate_grid
})
body.append(grid_slider)

// set frame canvas to draw each svg frame with effect before slicing
const frame_canvas = document.createElement('canvas')
frame_canvas.className = 'frame-canvas'
const frame_context = frame_canvas.getContext('2d', {
  willReadFrequently: true,
})

let render_padding
let render_width
let render_height

// button to generate the scanimation grid & sliced image
const scanimate_button = document.createElement('button')
scanimate_button.id = 'scanimate-button'
scanimate_button.textContent = 'Scanimate!'
scanimate_button.addEventListener('click', async () => {
  // scanimation is starting

  // set scanimation id for downloads
  scanimation_id = generate_id()

  // clear render canvas & grids to redraw if already drawn on
  render_context.clearRect(0, 0, 2000, 2000) // value that should be big enough to clear everything
  const grid_slices = [...grid_hiders.children, ...grid_cutouts.children]
  grid_slices.forEach((slice) => slice.remove())

  // set grids size
  const grid_viewbox = `0 0 ${render_width} ${render_height}`
  grid_cutouts.setAttribute('viewBox', grid_viewbox)
  grid_cutouts.setAttribute('width', render_width)
  grid_cutouts.setAttribute('height', render_height)
  grid_cutouts.setAttribute('fill', grid_color)
  grid_hiders.setAttribute('viewBox', grid_viewbox)
  grid_hiders.setAttribute('width', render_width)
  grid_hiders.setAttribute('height', render_height)
  grid_hiders.setAttribute('fill', grid_color)

  // reset grid slider & position on new scanimation
  translate_grid = 0
  grid_slider.value = 0
  grid_slider.step = slice_size / 10
  grid_slider.min = -(slice_size * 10)
  grid_slider.max = slice_size * 10
  grids.style.transform = `translate(0px)`

  // disable download button while waiting for scanimation to complete
  disable_download(true)

  // hide scanimation render
  grid_slider.classList.add('hidden')
  grid_label.classList.add('hidden')
  hide_grid_button.classList.add('hidden')
  set_grid_mode_button.classList.add('hidden')

  // display the loader & disable pointer events
  loader.classList.remove('hidden')
  body.style.pointerEvents = 'none'

  // scanimation properties:
  // get the total frames amount; in case the loop is on, the amount is increased
  const final_frames_amount = Math.min(
    max_extracted_frames_amount,
    frames_amount,
  ) // limit the frames amount to the maximum frames that can be extracted from the video
  const loop_frames_amount = final_frames_amount + (final_frames_amount - 2)
  const frames_amount_sum = loop_on ? loop_frames_amount : final_frames_amount

  // set size for the frame canvas to be drawn calibrated on the render size
  frame_canvas.width = render_width
  frame_canvas.height = render_height

  // set render canvas size
  render_canvas.width = render_width
  render_canvas.height = render_height

  const is_horizontal_axis = animation_axis === 'Horizontal'

  // set slice variables according to animation direction
  const slice_height = is_horizontal_axis ? render_height : slice_size
  const slice_width = is_horizontal_axis ? slice_size : render_width

  // slice the image in equal sections according to the settings
  const slices_amount =
    (is_horizontal_axis ? render_width : render_height) / slice_size

  // draw on the canvas for each frame to then slice the image
  for (let frame = 0; frame < frames_amount_sum; frame++) {
    // if the loop is on, past the last animation frame, the frames go reverse
    const has_reached_animation_end = frame > final_frames_amount - 1
    const reversed_frame = frame - (frame - (final_frames_amount - 1)) * 2
    const frame_index = has_reached_animation_end ? reversed_frame : frame

    // get the matching image from the extracted frames array using the interval value
    const image = extracted_frames[frame_index * frames_interval]

    // draw the image on the frame canvas
    const draw_image_coords = [0, 0, render_width, render_height]
    frame_context.drawImage(image, ...draw_image_coords)

    // slice the image frame and draw the visible slices to the render:
    // first slice to display starts from the current frame, then jump to next slice that
    // has to be drawn; ignore slices in between that will be the other frames' slices
    for (let slice = frame; slice < slices_amount; slice += frames_amount_sum) {
      // get coords to copy the slice from the frame canvas
      const copy_x = is_horizontal_axis ? slice * slice_size : 0
      const copy_y = is_horizontal_axis ? 0 : slice * slice_size
      const copy_coords = [copy_x, copy_y, slice_width, slice_height]
      const copied_pixels = frame_context.getImageData(...copy_coords)
      render_context.putImageData(copied_pixels, copy_x, copy_y)
    }

    // clear the frame canvas before drawing the next frame
    frame_context.clearRect(0, 0, 2000, 2000)
  }

  // create the grids by hiding the slices in equal sections according to the settings
  for (let slice = 0; slice < slices_amount; slice += frames_amount_sum) {
    const hider_x = is_horizontal_axis ? slice * slice_size : 0
    const hider_y = is_horizontal_axis ? 0 : slice * slice_size
    const hider_size = slice_size * (frames_amount_sum - 1)
    const hider_width = is_horizontal_axis ? hider_size : render_width
    const hider_height = is_horizontal_axis ? render_height : hider_size

    // add the hider to the hiders svg grid
    const hider = document.createElementNS(w3_url, 'rect')
    hider.setAttribute('x', hider_x)
    hider.setAttribute('y', hider_y)
    hider.setAttribute('width', hider_width)
    hider.setAttribute('height', hider_height)
    grid_hiders.append(hider)

    // add the cutout to the cutouts svg grid
    const cutout_x = is_horizontal_axis ? hider_x + hider_width : 0
    const cutout_y = is_horizontal_axis ? 0 : hider_y + hider_height
    const cutout_width = is_horizontal_axis ? slice_size : render_width
    const cutout_height = is_horizontal_axis ? render_height : slice_size

    const cutout = document.createElementNS(w3_url, 'rect')
    cutout.setAttribute('x', cutout_x)
    cutout.setAttribute('y', cutout_y)
    cutout.setAttribute('width', cutout_width)
    cutout.setAttribute('height', cutout_height)
    grid_cutouts.append(cutout)
  }

  // scanimation is complete

  // remove the loader & enable pointer events
  loader.classList.add('hidden')
  body.style.pointerEvents = 'all'

  // show the scanimation render
  render_canvas.classList.remove('hidden')
  grids.classList.remove('hidden')
  grid_hiders.classList.remove('hidden')
  grid_cutouts.classList.add('hidden')
  grid_slider.classList.remove('hidden')
  grid_label.classList.remove('hidden')
  hide_grid_button.classList.remove('hidden')
  hide_grid_button.textContent = 'Hide grid'
  set_grid_mode_button.classList.remove('hidden')
  set_grid_mode_button.textContent = 'See cutouts'

  // enable download button
  disable_download(false)
})

scanimation_settings.append(scanimate_button)

let has_scanimated = true

// download files
const svg_to_blob = (svg) => {
  const cloned_svg = svg.cloneNode(true)
  cloned_svg.removeAttribute('style')
  cloned_svg.removeAttribute('width')
  cloned_svg.removeAttribute('height')
  const { outerHTML: svg_html } = cloned_svg
  const blob = new Blob([svg_html], { type: 'image/svg+xml;charset=utf-8' })
  return blob
}

const generate_file = {
  // export render canvas as blob to convert to png file
  render: () => new Promise((resolve) => render_canvas.toBlob(resolve)),

  // convert svg grid to canvas & export canvas as blob to convert to png file
  grid: () =>
    new Promise((resolve) => {
      const blob = svg_to_blob(grid_hiders)
      const URL = window.URL || window.webkitURL || window
      const blobURL = URL.createObjectURL(blob)
      const image = new Image()
      image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = render_width
        canvas.height = render_height
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, render_width, render_height)
        return canvas.toBlob(resolve)
      }
      image.src = blobURL
    }),

  // export cutouts svg grid as blob to get svg file
  cutouts: () => svg_to_blob(grid_cutouts),

  // create text string with all the custom settings from inputs to get txt file
  settings: () => {
    const date = get_today_date()
    let text = `Scanimation #${scanimation_id} generated on ${date}\n\n`
    const inputs_css_query = `input:not([type='range']), select, .switch`
    const inputs = document.querySelectorAll(inputs_css_query)
    inputs.forEach((input) => {
      const label = document.querySelector(`label[for='${input.id}']`)
      text += `${label.textContent}: ${input.value}\n`
    })
    text += '\nHope you enjoy it hihi!\n\n© Marie Malarme 2022'
    return text
  },
}

// create a bundle zip file with jszip lib & download it
const download_zip = async () => {
  // create zip & folder
  const zip = new JSZip()
  const folder_name = `scanimation-${scanimation_id}`
  const folder = zip.folder(folder_name)

  // create & add all files to folder
  const render = await generate_file.render()
  folder.file(`${folder_name}-render.png`, render)

  const grid = await generate_file.grid()
  folder.file(`${folder_name}-grid.png`, grid)

  const cutouts = generate_file.cutouts()
  folder.file(`${folder_name}-grid-cutouts.svg`, cutouts)

  const settings = generate_file.settings()
  folder.file(`${folder_name}-settings.txt`, settings)

  // zip the whole bundle & export as blob
  const content = await zip.generateAsync({ type: 'blob' })
  const URL = window.URL || window.webkitURL || window
  const blob = URL.createObjectURL(content)

  // download the bundle
  const link = document.createElement('a')
  link.href = blob
  link.download = `scanimation-${scanimation_id}.zip`
  link.click()
  link.remove()
}

const download_zip_button = document.createElement('button')
download_zip_button.className = 'download'
download_zip_button.disabled = true
download_zip_button.textContent = 'Download ZIP file'
download_zip_button.style.display = 'none'
download_zip_button.addEventListener('click', download_zip)
controls_panel.append(download_zip_button)
