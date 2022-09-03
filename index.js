// variables
const w3_url = 'http://www.w3.org/2000/svg'
const { body } = document
body.style.overflow = 'hidden'

const shapes_paths = [
  // star 6 branches
  'm564.92 57.17 23.6 185.33 a65.45 65.45 0 0 0 90.22 52.09 L851 222.37 c70.87 -29.71 126.08 65.91 64.92 112.44 l-148.7 113.1 a65.45 65.45 0 0 0 0 104.18 L916 665.19 c61.16 46.53 5.95 142.15 -64.92 112.44 l-172.3 -72.22 a65.45 65.45 0 0 0 -90.22 52.09 l-23.6 185.33 c-9.71 76.23 -120.13 76.23 -129.84 0 L411.48 757.5 a65.45 65.45 0 0 0 -90.22 -52.09 L149 777.63 c-70.91 29.71 -126.12 -65.91 -65 -112.44 l148.7 -113.1 a65.45 65.45 0 0 0 0 -104.18 L84 334.81 c-61.16 -46.53 -6 -142.15 64.92 -112.44 l172.3 72.22 a65.45 65.45 0 0 0 90.22 -52.09 l23.6 -185.33 c9.75 -76.23 120.17 -76.23 129.88 0Z',
  // ribbon ondulated
  'M608.23 44.43 a168.38 168.38 0 0 0 108.22 39.39 A168.36 168.36 0 0 1 882.26 223 a168.37 168.37 0 0 0 57.59 99.74 168.36 168.36 0 0 1 37.58 213.16 168.42 168.42 0 0 0 -20 113.43 168.37 168.37 0 0 1 -108.22 187.4 168.4 168.4 0 0 0 -88.23 74 168.37 168.37 0 0 1 -203.39 74 168.38 168.38 0 0 0 -115.18 0 168.37 168.37 0 0 1 -203.39 -74 168.4 168.4 0 0 0 -88.23 -74 A168.37 168.37 0 0 1 42.57 649.28 a168.42 168.42 0 0 0 -20 -113.43 168.36 168.36 0 0 1 37.58 -213.16 A168.37 168.37 0 0 0 117.74 223 168.36 168.36 0 0 1 283.55 83.82 a168.38 168.38 0 0 0 108.22 -39.39 168.38 168.38 0 0 1 216.46 0Z',
  // circle
  'M0 500 a500 500 0 1 0 1000 0 a500 500 0 1 0 -1000 0',
  // + with rounded strokes
  'M617.75 882.25 V698.31 a80.56 80.56 0 0 1 80.56 -80.56 h183.94 C947 617.75 1000 564.76 1000 500 c0 -64.76 -53 -117.75 -117.75 -117.75 H698.31 a80.56 80.56 0 0 1 -80.56 -80.56 V117.75 C617.75 53 564.76 0 500 0 c-64.76 0 -117.75 53 -117.75 117.75 v183.94 a80.56 80.56 0 0 1 -80.56 80.56 H117.75 C53 382.25 0 435.24 0 500 c0 64.76 53 117.75 117.75 117.75 h183.94 a80.56 80.56 0 0 1 80.56 80.56 v183.94 C382.25 947 435.24 1000 500 1000 c64.76 0 117.75 -53 117.75 -117.75Z',
  // x with super rounded strokes
  'm896.32 396.58 43 -43 c80.88 -80.88 80.88 -212 0 -292.89 -80.88 -80.88 -212 -80.88 -292.89 0 l-43 43 a146.25 146.25 0 0 1 -206.84 0 l-43 -43 c-80.88 -80.88 -212 -80.88 -292.89 0 -80.88 80.88 -80.88 212 0 292.89 l43 43 a146.25 146.25 0 0 1 0 206.84 l-43 43 c-80.88 80.88 -80.88 212 0 292.89 80.88 80.88 212 80.88 292.89 0 l43 -43 a146.25 146.25 0 0 1 206.84 0 l43 43 c80.88 80.88 212 80.88 292.89 0 80.88 -80.88 80.88 -212 0 -292.89l -43 -43 a146.25 146.25 0 0 1 0 -206.84Z',
  // biscuit bn
  'm916.32 705.1 76 172.81 c31.91 72.5 -42 146.36 -114.45 114.45 l-172.81 -76 a509.12 509.12 0 0 0 -410.2 0 l-172.81 76c -72.5 31.91 -146.36 -42 -114.45 -114.45 l76 -172.81 a509.12 509.12 0 0 0 0 -410.2 l-76 -172.81 c-31.91 -72.5 42 -146.36 114.45 -114.45 l172.81 76 a509.12 509.12 0 0 0 410.2 0 l172.81 -76 c72.5 -31.91 146.36 42 114.45 114.45 l-76 172.81 a509.12 509.12 0 0 0 0 410.2Z',
  // x with rounded ends
  'M932.83 608.81 824.5 500.48 l108 -108 c89.1 -89.11 88.89 -235.13 -.49 -324.5 -89.37 -89.38 -235.39 -89.59 -324.5 -.49 l-108 108 L391.19 67.17 c-89.37 -89.37 -235.4 -89.59 -324.5 -.48 -89.11 89.1 -88.89 235.13 .48 324.5 L175.5 499.52 l-108 108 C-21.61 696.63 -21.4 842.65 68 932 c89.37 89.38 235.39 89.59 324.5 .49 l108 -108 108.31 108.34 c89.37 89.37 235.4 89.59 324.5 .48 89.11 -89.1 88.89 -235.13 -.48 -324.5Z',
  // streched x
  'M985.75 43.33 840.93 205.59 c-72.29 81 -113.13 185.61 -113.19 294.19 v5.68 c1.26 106.75 42 209.26 113.12 288.92 l144.89 162.29 c12.37 19 -10 41.45 -29.08 29.08 L794.41 840.93 c-81 -72.29 -185.61 -113.13 -294.19 -113.19 h-5.68 c-106.75 1.26 -209.26 42 -288.92 113.12 L43.33 985.75 c-19 12.37 -41.45 -10 -29.08 -29.08 L159.1 794.38 c71.09 -79.66 111.9 -182.17 113.12 -288.92 v-5.68 c-.06 -108.58 -40.9 -213.18 -113.19 -294.19 L14.25 43.33 c-12.37 -19 10 -41.45 29.08 -29.08 L205.62 159.1 c79.66 71.09 182.17 111.9 288.92 113.12 h5.68 c108.58 -.06 213.18 -40.9 294.19 -113.19 L956.67 14.25 c19.04 -12.37 41.45 10.04 29.08 29.08Z',
  // square curved
  'M844.36 155.64 A155.64 155.64 0 0 0 688.72 0 H311.28 a155.64 155.64 0 0 0 -155.64 155.64 A155.64 155.64 0 0 0 0 311.28 v377.44 a155.64 155.64 0 0 0 155.64 155.64 A155.64 155.64 0 0 0 311.28 1000 h377.44 a155.64 155.64 0 0 0 155.64 -155.64A 155.64 155.64 0 0 0 1000 688.72 V311.28 a155.64 155.64 0 0 0 -155.64 -155.64Z',
  // biscuit bn
  'm167.14 0 152.48 40.72 a699.14 699.14 0 0 0 360.76 0 L832.86 0 C924.79 0 1000 75.21 1000 167.14 l-40.72 152.48 a699.14 699.14 0 0 0 0 360.76 L1000 832.86 c0 91.93 -75.21 167.14 -167.14 167.14 l-152.48 -40.72 a699.14 699.14 0 0 0 -360.76 0 L167.14 1000 C75.21 1000 0 924.79 0 832.86 l40.72 -152.48 a699.14 699.14 0 0 0 0 -360.76 L0 167.14 C0 75.21 75.21 0 167.14 0Z',
  // losange
  'm827.55 388.67 131.18 51 c55 21.4 55 99.26 0 120.66 l-131.18 51 a379.57 379.57 0 0 0 -216.22 216.22 l-51 131.18 c-21.4 55 -99.26 55 -120.66 0 l-51 -131.18 a379.57 379.57 0 0 0 -216.22 -216.22 l-131.18 -51 c-55 -21.4 -55 -99.26 0 -120.66 l131.18 -51 a379.57 379.57 0 0 0 216.22 -216.22 l51 -131.18 c21.4 -55 99.26 -55 120.66 0 l51 131.18 a379.57 379.57 0 0 0 216.22 216.22Z',
  // pointy bn
  'M646.07 155.76 986.27 6 c7.55 -3.32 11 .14 7.69 7.69 L844.24 353.93 a362.63 362.63 0 0 0 0 292.14 L994 986.27 c3.32 7.55 -.14 11 -7.69 7.69 L646.07 844.24 a362.63 362.63 0 0 0 -292.14 0 L13.73 994 c-7.55 3.32 -11 -.14 -7.69 -7.69 l149.72 -340.2 a362.63 362.63 0 0 0 0 -292.14 L6 13.73 c-3.32 -7.55 .14 -11 7.69 -7.69 l340.2 149.72 a362.63 362.63 0 0 0 292.18 0Z',
  // losange with pointy edges
  'M894.37 409.86 c-3.47 0 -6.88 .15 -10.26 .43 l-294.4 -294.4 c.28 -3.38 .43 -6.79 .43 -10.26 C590.14 47.29 500 0 500 0 s-90.14 47.29 -90.14 105.63 c0 3.47.15 6.88 .43 10.26 l-294.4 294.4 c-3.38 -.28 -6.79 -.43 -10.26 -.43 C47.29 409.86 0 500 0 500 s47.29 90.14 105.63 90.14 c3.47 0 6.88 -.15 10.26 -.43 l294.4 294.4 c-.28 3.38 -.43 6.79 -.43 10.26 C409.86 952.71 500 1000 500 1000 s90.14 -47.29 90.14 -105.63 c0 -3.47 -.15 -6.88 -.43 -10.26 l294.4 -294.4 c3.38 .28 6.79 .43 10.26 .43 C952.71 590.14 1000 500 1000 500 s-47.29 -90.14 -105.63 -90.14Z',
  // trefle 4 leaves
  'M957.82 570.29 647.7 508.87 c-9.71 -1.93 -9.71 -15.81 0 -17.74 l310.12 -61.42 c43.48 -14.49 56.5 -69.67 24.1 -102.08 L672.37 18.08 C640-14.32 584.78 -1.3 570.29 42.18 L508.87 352.3 c-1.93 9.71 -15.81 9.71 -17.74 0 L429.71 42.18 C415.22 -1.3 360 -14.32 327.63 18.08 L18.08 327.63 C-14.32 360 -1.3 415.22 42.18 429.71 l310.12 61.42 c9.71 1.93 9.71 15.81 0 17.74 L42.18 570.29 C-1.3 584.78 -14.32 640 18.08 672.37 l309.55 309.55 c32.41 32.4 87.59 19.38 102.08 -24.1 l61.42 -310.12 c1.93 -9.71 15.81 -9.71 17.74 0 l61.42 310.12 c14.49 43.48 69.67 56.5 102.08 24.1 l309.55 -309.55 c32.4 -32.37 19.38 -87.59 -24.1 -102.08Z',
  // super rounded x
  'M1000 294.29 C997.47 133.67 866.34 2.54 705.73 0 a297.77 297.77 0 0 0 -173.28 52 57.41 57.41 0 0 1 -64.9 0 A297.78 297.78 0 0 0 294.32 0 C133.7 2.51 2.55 133.63 0 294.25 a297.69 297.69 0 0 0 52 173.3 57.45 57.45 0 0 1 0 64.9 297.69 297.69 0 0 0 -52 173.3 C2.55 866.37 133.7 997.49 294.32 1000 a297.78 297.78 0 0 0 173.23 -52 57.41 57.41 0 0 1 64.9 0 297.77 297.77 0 0 0 173.28 52 c160.61 -2.5 291.74 -133.63 294.23 -294.25 A297.8 297.8 0 0 0 948 532.45 a57.45 57.45 0 0 1 0 -64.9 297.8 297.8 0 0 0 52 -173.26Z',
  // roounded +
  'M763.2 263.19 a26.38 26.38 0 0 1 -26.39 -26.38 C736.81 106.56 630.24 0 500 0 S263.19 106.56 263.19 236.8 a26.38 26.38 0 0 1 -26.39 26.38 C106.56 263.19 0 369.76 0 500 s106.56 236.81 236.8 236.81 a26.38 26.38 0 0 1 26.39 26.38 C263.19 893.44 369.76 1000 500 1000 s236.81 -106.56 236.81 -236.81 a26.38 26.38 0 0 1 26.39 -26.38 c130.24 0 236.8 -106.57 236.8 -236.81 S893.44 263.19 763.2 263.19Z',
  // x with round strokes
  'm258.91 955.73 167.66 -167.66 a103.85 103.85 0 0 1 146.86 0 l167.66 167.66 c59 59 155.61 59 214.64 0 59 -59 59 -155.62 0 -214.64 L788.07 573.43 a103.85 103.85 0 0 1 0 -146.86 l167.66 -167.66 c59 -59 59 -155.61 0 -214.64 -59 -59 -155.62 -59 -214.64 0L573.43 211.93 a103.85 103.85 0 0 1 -146.86 0 L258.91 44.27 c-59 -59 -155.61 -59 -214.64 0 -59 59 -59 155.62 0 214.64 l167.66 167.66 a103.85 103.85 0 0 1 0 146.86 L44.27 741.09 c-59 59 -59 155.61 0 214.64 59.03 59.03 155.62 59.03 214.64 0Z',
  // ribbon ondulated 6 branches
  'm40 397.82 77.49 -82.32 a147 147 0 0 0 33.4 -57.33 l33.41 -108 a147 147 0 0 1 174.2 -99.65 l110 25.95 a147.19 147.19 0 0 0 66.35 .27 l110.26 -25.09 a147 147 0 0 1 173.39 101 L851.05 261 a146.92 146.92 0 0 0 33 57.59 l76.83 82.94 a147 147 0 0 1 -.8 200.69 l-77.54 82.28 a147 147 0 0 0 -33.4 57.33 l-33.41 108 a147 147 0 0 1 -174.2 99.65 l-110 -26 a147.19 147.19 0 0 0 -66.35 -.27 l-110.29 25.14 a147 147 0 0 1 -173.39 -101 L149 739 a146.92 146.92 0 0 0 -33 -57.55 l-76.83 -82.94 A147 147 0 0 1 40 397.82Z',
  // circle with 4 pointy edges
  'M894.37 409.86 c-3.47 0 -6.88 .15 -10.26 .43 -33.91 -145.76 -148.64 -260.49 -294.4 -294.4 .28 -3.38 .43 -6.79 .43 -10.26 C590.14 47.29 500 0 500 0 s-90.14 47.29 -90.14 105.63 c0 3.47 .15 6.88 .43 10.26 -145.76 33.91 -260.49 148.64 -294.4 294.4 -3.38 -.28 -6.79 -.43 -10.26 -.43 C47.29 409.86 0 500 0 500 s47.29 90.14 105.63 90.14 c3.47 0 6.88 -.15 10.26 -.43 33.91 145.76 148.64 260.49 294.4 294.4 -.28 3.38 -.43 6.79 -.43 10.26 C409.86 952.71 500 1000 500 1000 s90.14 -47.29 90.14 -105.63 c0 -3.47 -.15 -6.88 -.43 -10.26 145.76 -33.91 260.49 -148.64 294.4 -294.4 3.38 .28 6.79 .43 10.26 .43 C952.71 590.14 1000 500 1000 500 s-47.29 -90.14 -105.63 -90.14Z',
  // start 6 branches
  'M913.6 688 771.22 561.08 q-22.22 -19.81 -42.39 -41.49 a28.76 28.76 0 0 1 0 -39.18 q20.16 -21.65 42.39 -41.49 L913.6 312.05 c25.62 -22.83 1.62 -64.4 -31 -53.63 l-181.03 59.86 a639 639 0 0 1 -67 18.18 28.87 28.87 0 0 1 -32.84 -17.58 642.14 642.14 0 0 1 -32.1 -106.94 L531 25.2 c-7 -33.6 -55 -33.6 -61.92 0 l-38.73 186.74 a642.14 642.14 0 0 1 -32.1 106.94 28.88 28.88 0 0 1 -32.85 17.58 639.44 639.44 0 0 1 -67 -18.18 l-181.04 -59.86 c-32.58 -10.77 -56.58 30.8 -31 53.63 l142.41 126.87 q22.23 19.81 42.4 41.49 a28.76 28.76 0 0 1 0 39.18 q-20.16 21.64 -42.4 41.49 L86.4 688 c-25.62 22.83 -1.62 64.4 31 53.63 l181.07 -59.86 a639.44 639.44 0 0 1 67 -18.18 28.88 28.88 0 0 1 32.85 17.58 642.14 642.14 0 0 1 32.1 106.94 L469 974.8 c7 33.6 55 33.6 61.92 0 l38.69 -186.74 a642.14 642.14 0 0 1 32.1 -106.94 28.87 28.87 0 0 1 32.84 -17.58 639 639 0 0 1 67 18.18 l181.07 59.86 c32.6 10.77 56.6 -30.8 30.98 -53.58Z',
  // virus 8 branches
  'm512.78 11.3 26.47 215.26 c7.46 60.63 78.21 89.93 126.34 52.33 L836.52 145.4 c12 -9.34 27.42 6.11 18.08 18.08 L721.11 334.41 c-37.6 48.13 -8.3 118.88 52.33 126.34 l215.26 26.47 c15.07 1.85 15.07 23.71 0 25.56 l-215.26 26.47 c-60.63 7.46 -89.93 78.21 -52.33 126.34 L854.6 836.52 c9.34 12 -6.11 27.42 -18.08 18.08 L665.59 721.11 c-48.13 -37.6 -118.88 -8.3 -126.34 52.33 L512.78 988.7 c-1.85 15.07 -23.71 15.07 -25.56 0 l-26.47 -215.26 c-7.46 -60.63 -78.21 -89.93 -126.34 -52.33 L163.48 854.6 c-12 9.34 -27.42 -6.11 -18.08 -18.08 l133.49 -170.93 c37.6 -48.13 8.3 -118.88 -52.33 -126.34 L11.3 512.78 c-15.07 -1.85 -15.07 -23.71 0 -25.56 l215.26 -26.47 c60.63 -7.46 89.93 -78.21 52.33 -126.34 L145.4 163.48 c-9.34 -12 6.11 -27.42 18.08 -18.08 l170.93 133.49 c48.13 37.6 118.88 8.3 126.34 -52.33 L487.22 11.3 c1.85 -15.07 23.71 -15.07 25.56 0Z',
  // ribbon ondulated 8 branches
  'M997 500 c0 -27.5 -33.2 -53 -89.79 -73.94 a120.9 120.9 0 0 1 -67.86 -163.84 c25.2 -54.83 30.65 -96.33 11.2 -115.77 s-60.94 -14 -115.78 11.2 a120.9 120.9 0 0 1 -163.84 -67.86 C550 33.2 524.49 0 497 0 s-53 33.2 -74 89.79 a120.9 120.9 0 0 1 -163.83 67.86 c-54.83 -25.2 -96.33 -30.65 -115.78 -11.2 s-14 60.94 11.21 115.77 a120.91 120.91 0 0 1 -67.82 163.84 C30.18 447 -3 472.5 -3 500 s33.19 53 89.79 73.94 a120.91 120.91 0 0 1 67.86 163.84 c-25.2 54.83 -30.65 96.33 -11.21 115.77 s60.95 14 115.78 -11.2 A120.9 120.9 0 0 1 423 910.21 c21 56.59 46.49 89.79 74 89.79 s53 -33.2 73.94 -89.79 a120.9 120.9 0 0 1 163.83 -67.86 c54.84 25.2 96.34 30.65 115.78 11.2 s14 -60.94 -11.2 -115.77 a120.9 120.9 0 0 1 67.85 -163.84 C963.79 553 997 527.5 997 500Z',
  // losange ondulated 8 branches
  'M895.64 375.46 h-31.59 a44.14 44.14 0 0 1 -44.14 -44.14 v-57.77 a125.06 125.06 0 0 0 -125.06 -125.06 h-26.17 a44.14 44.14 0 0 1 -44.14 -44.13 A104.35 104.35 0 0 0 520.19 0 h-40.38 a104.35 104.35 0 0 0 -104.35 104.36 44.14 44.14 0 0 1 -44.14 44.13 h-26.17 a125.06 125.06 0 0 0 -125.06 125.06 v57.77 A44.14 44.14 0 0 1 136 375.46 h-31.64 A104.35 104.35 0 0 0 0 479.81 v40.38 a104.35 104.35 0 0 0 104.36 104.35 H136 a44.14 44.14 0 0 1 44.14 44.14 v57.77 a125.06 125.06 0 0 0 125.01 125.06 h26.17 a44.14 44.14 0 0 1 44.14 44.13 A104.35 104.35 0 0 0 479.81 1000 h40.38 a104.35 104.35 0 0 0 104.35 -104.36 44.14 44.14 0 0 1 44.14 -44.13 h26.17 a125.06 125.06 0 0 0 125.06 -125.06 v-57.77 a44.14 44.14 0 0 1 44.14 -44.14 h31.59 A104.35 104.35 0 0 0 1000 520.19 v-40.38 a104.35 104.35 0 0 0 -104.36 -104.35Z',
  // start 6 branches
  'M489.56 17.32 c5.77 -23.15 14.92 -23.08 20.33 .16 l36.63 157.32 c20.1 82 133 142.17 214 118.59 l152.31 -43.79 c22.93 -6.59 27.65 1.57 10.48 18.15 L806.84 380.16 c-60.94 58.4 -60.94 181.69 0 240.08 l116.43 112.07 c17.19 16.55 12.54 24.55 -10.34 17.78 l-155.26 -46 c-81 -23.58 -191 39.51 -211.15 121.48l -36.61 156.98 c-5.43 23.23 -14.46 23.27 -20.08 .08 l-38.76 -159.92 c-20.1 -82 -108.93 -146.6 -190 -123 L87.23 750.28 C64.31 757 59.51 748.74 76.56 732 l117.08 -114.65 c60.94 -58.4 60.94 -181.69 0 -240.08 L77.13 267.38 c-17.36 -16.37 -12.78 -24.45 10.19 -18 l155.49 44 C323.85 317 431 253.88 451.07 171.91Z',
]

const default_paths = { start: shapes_paths[0], end: shapes_paths[20] }
let morph_paths = { start: default_paths.start, end: default_paths.end }

// functions
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))
const round = (number) => Math.round((number + Number.EPSILON) * 100) / 100

const random_int = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const random_color = () => {
  const hue = random_int(0, 360)
  const saturation = random_int(50, 90)
  const luminosity = random_int(40, 80)
  return `hsl(${hue}, ${saturation}%, ${luminosity}%)`
}

// morph path customizable settings
let blur_filter = 20
let fill_color = 'black'
let stroke_width = 10

const draw_svg_path = (path_coords = '') => {
  // create the svg shape
  const svg = document.createElementNS(w3_url, 'svg')
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  svg.setAttribute('viewBox', `0 0 ${shape_viewbox_size} ${shape_viewbox_size}`)

  // create the blur filter for the path
  const filter = document.createElementNS(w3_url, 'filter')
  filter.id = 'blur'
  const gaussian_blur = document.createElementNS(w3_url, 'feGaussianBlur')
  gaussian_blur.setAttribute('in', 'SourceGraphic')
  gaussian_blur.setAttribute('stdDeviation', blur_filter)
  filter.append(gaussian_blur)
  svg.append(filter)

  // create the morph path
  const path = document.createElementNS(w3_url, 'path')
  path.setAttribute('d', path_coords)
  path.setAttribute('fill', fill_color)
  path.setAttribute('stroke', 'white')
  path.setAttribute('stroke-width', `${stroke_width}px`)
  path.setAttribute('filter', 'url(#blur)')
  svg.append(path)

  return [svg, path, gaussian_blur]
}

// set up the html elements
const shape_viewbox_size = 1000

// create the morphing shape
const morph_shape = document.createElement('div')
morph_shape.id = 'shape'
const [morph_svg, morph_path, morph_blur] = draw_svg_path(morph_paths.start)
morph_shape.append(morph_svg)
body.append(morph_shape)

let interpolator = flubber.interpolate(morph_paths.start, morph_paths.end)

// morphing animation
let morph_step = 0
let paused = true
let rewind

setInterval(() => {
  if (paused) return

  // update the svg elements
  morph_path.setAttribute('d', interpolator(morph_step))

  const is_first_morph_step = round(morph_step) === 0
  const is_last_morph_step = round(morph_step) === 1

  // update rewind if needed
  if (is_last_morph_step) {
    rewind = true
  }

  if (is_first_morph_step) {
    rewind = false
  }

  // update morph step
  morph_step = rewind ? morph_step - 0.02 : morph_step + 0.02
}, 20)

// video controls
const buttons = document.createElement('div')
buttons.id = 'buttons'

const video_button = document.createElement('button')
video_button.id = 'video-button'
video_button.textContent = 'Play animation'

buttons.append(video_button)
body.append(buttons)

video_button.addEventListener('click', () => {
  paused = !paused
  video_button.textContent = paused ? 'Play animation' : 'Pause animation'
})

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

// shapes select buttons
let selected_paths = { start: null, end: null }
let path_to_set = null

const shape_selectors = document.createElement('div')
shape_selectors.className = 'shape-selectors'

const selectors = ['start', 'end']
const path_selectors = Object.fromEntries(
  selectors.map((selector) => {
    const path_selector = document.createElement('button')
    const id = `path-selector-${selector}`
    path_selector.id = id
    path_selector.className = 'path-selector'
    path_selector.textContent = `Set ${selector}`
    path_selector.addEventListener('click', () => {
      if (path_to_set) return
      path_to_set = selector
      path_selector.classList.add('selected')
      shape_selectors.classList.add('hoverable')
      paused = true
      video_button.disabled = true
      document.querySelector(`.path-selector:not(#${id})`).disabled = true
      Object.values(selected_paths).map((p) => p.classList.add('not-hoverable'))
      selected_paths[selector].classList.add('selected')
    })

    return [selector, path_selector]
  }),
)

shapes_paths.forEach((shape_path, index) => {
  const is_default_start_path = shape_path === default_paths.start
  const is_default_end_path = shape_path === default_paths.end
  const is_default_path = is_default_start_path || is_default_end_path

  const shape_selector = document.createElement('div')
  shape_selector.className = 'shape-selector'
  shape_selector.style.width = `calc(${100 / shapes_paths.length}%)`

  const svg = document.createElementNS(w3_url, 'svg')
  svg.setAttribute('viewBox', `0 0 ${shape_viewbox_size} ${shape_viewbox_size}`)

  const path = document.createElementNS(w3_url, 'path')
  const id = `path-${index + 1}`
  path.id = id
  path.setAttribute('fill', is_default_path ? 'black' : 'none')
  path.setAttribute('d', shape_path)

  if (is_default_path) {
    path.classList.add('selected')
  }

  if (is_default_start_path) {
    selected_paths.start = path
    shape_selector.append(path_selectors.start)
  }

  if (is_default_end_path) {
    selected_paths.end = path
    shape_selector.append(path_selectors.end)
  }

  // update the morph path when clicking on a shape selector button
  svg.addEventListener('click', () => {
    if (!path_to_set) {
      const match_selected_path = Object.entries(selected_paths).find(
        ([selector, path]) => path.id === id,
      )
      if (!match_selected_path) return

      const selector = match_selected_path[0]
      path_to_set = selector

      const path_selector = path_selectors[selector]
      path_selector.classList.add('selected')
      shape_selectors.classList.add('hoverable')
      paused = true
      video_button.disabled = true
      document.querySelector(
        `.path-selector:not(#${path_selector.id})`,
      ).disabled = true
      Object.values(selected_paths).map((p) => p.classList.add('not-hoverable'))
      selected_paths[selector].classList.add('selected')
    } else {
      // prevent the other selected path to be selected twice
      const other_selector = selectors.find((s) => s !== path_to_set)
      const is_already_selected = selected_paths[other_selector].id === id
      if (is_already_selected) return

      // update ui to unselect the previously selected path & select the clicked one
      const path_selector = path_selectors[path_to_set]
      path_selector.classList.remove('selected')
      shape_selectors.classList.remove('hoverable')
      Object.values(selected_paths).map((p) =>
        p.classList.remove('not-hoverable'),
      )
      path_selectors[other_selector].disabled = false
      selected_paths[other_selector].classList.remove('disabled')
      selected_paths[path_to_set].classList.remove('selected')
      selected_paths[path_to_set].setAttribute('fill', 'none')
      path.setAttribute('fill', 'black')
      path.classList.add('selected')
      selected_paths[path_to_set] = path
      path_to_set = null

      // update the morph path with the selected shape & the interpolator
      interpolator = flubber.interpolate(morph_paths.start, morph_paths.end)

      // reset morph animation to start & relaunch animation
      morph_step = 0
      paused = false
      video_button.textContent = 'Pause animation'
      video_button.disabled = false
    }
  })

  // update the morph path when hovering on a shape selector button
  svg.addEventListener('mouseenter', () => {
    if (!path_to_set) return

    // prevent the other selected path to be selected twice
    const other_selector = selectors.find((s) => s !== path_to_set)
    const is_already_selected = selected_paths[other_selector].id === id
    if (is_already_selected) return

    // set ui to unselect the previously selected path & select the clicked one
    const path_selector = path_selectors[path_to_set]
    shape_selector.append(path_selector)

    // update the morph path with the selected shape
    morph_path.setAttribute('d', shape_path)
    morph_paths[path_to_set] = shape_path
  })

  svg.append(path)
  shape_selector.append(svg)
  shape_selectors.append(shape_selector)
})

body.append(shape_selectors)

// scanimation fixed settings
const render_padding_ratio = 0.15 // padding around the render image to have space to move the grid
const animation_axes = ['Horizontal', 'Vertical']
const resolutions = { 72: 0.352777778, 150: 0.169333333, 300: 0.084666667 } // conversion for 1 px in mm for each resolution
// 1px = 0.352777778mm in 72 dpi / 1px = 0.169333333mm in 300 dpi / 1px = 0.084666667mm in 300 dpi

// scanimation customizable settings
let render_size = 500 // in pixels
let px_to_mm = resolutions['150'] // resolution of 150 dpi by default
let frames_amount = 4
let loop_on = true
let slice_size = 2
let curves_smoothness = 5
let animation_axis = animation_axes[0]

const controls_panel = document.createElement('div')
controls_panel.id = 'controls-panel'
body.append(controls_panel)

// panel for morph path settings
const morph_path_settings = document.createElement('div')
morph_path_settings.id = 'morph-path-settings'
morph_path_settings.className = 'settings-panel'
morph_path_settings_label = document.createElement('p')
morph_path_settings_label.textContent = 'Path settings'
morph_path_settings.append(morph_path_settings_label)
controls_panel.append(morph_path_settings)

// input to set the path fill color
const fill = document.createElement('div')
const fill_label = document.createElement('label')
fill_label.textContent = 'Fill color'
const fill_input = document.createElement('input')
fill_input.type = 'text'
fill_input.min = 0
fill_input.max = 50
fill_input.value = fill_color
fill_input.addEventListener('input', (event) => {
  fill_color = event.target.value
  morph_path.setAttribute('fill', fill_color)
})
fill.append(fill_input)
fill.append(fill_label)
morph_path_settings.append(fill)

// input to set the path stroke width
const stroke = document.createElement('div')
const stroke_label = document.createElement('label')
stroke_label.textContent = 'Stroke width'
const stroke_input = document.createElement('input')
stroke_input.type = 'number'
stroke_input.min = 0
stroke_input.max = 50
stroke_input.value = stroke_width
stroke_input.addEventListener('input', (event) => {
  stroke_width = Number(event.target.value)
  morph_path.setAttribute('stroke-width', `${stroke_width}px`)
})
stroke.append(stroke_input)
stroke.append(stroke_label)
morph_path_settings.append(stroke)

// input to set the blur effect
const blur = document.createElement('div')
const blur_label = document.createElement('label')
blur_label.textContent = 'Blur effect'
const blur_input = document.createElement('input')
blur_input.type = 'number'
blur_input.min = 0
blur_input.max = 50
blur_input.value = blur_filter
blur_input.addEventListener('input', (event) => {
  blur_filter = Number(event.target.value)
  morph_blur.setAttribute('stdDeviation', blur_filter)
})
blur.append(blur_input)
blur.append(blur_label)
morph_path_settings.append(blur)

// panel for scanimation settings
const scanimation_settings = document.createElement('div')
scanimation_settings.id = 'scanimation-settings'
scanimation_settings.className = 'settings-panel'
scanimation_settings_label = document.createElement('p')
scanimation_settings_label.textContent = 'Scanimation settings'
scanimation_settings.append(scanimation_settings_label)
controls_panel.append(scanimation_settings)

// input to set the size of the render
const size = document.createElement('div')
const size_label = document.createElement('label')
size_label.textContent = 'Dimensions in px'
const size_mm_label = document.createElement('span')
size_mm_label.textContent = `~ ${(render_size * px_to_mm).toFixed(2)} mm`
size_label.append(size_mm_label)
const size_input = document.createElement('input')
size_input.type = 'number'
size_input.min = 200
size_input.max = 2000
size_input.value = render_size
size_input.addEventListener('input', (event) => {
  render_size = Number(event.target.value)
  size_mm_label.textContent = `~ ${(render_size * px_to_mm).toFixed(2)} mm`
})
size.append(size_input)
size.append(size_label)
scanimation_settings.append(size)

// input to set the resolution of the render
const resolution = document.createElement('div')
const resolution_label = document.createElement('label')
resolution_label.textContent = 'Render resolution in dpi'
const resolution_input = document.createElement('select')
Object.keys(resolutions).map((resolution) => {
  const option = document.createElement('option')
  option.text = resolution
  resolution_input.append(option)
})
resolution_input.value = '150'
resolution_input.addEventListener('input', (event) => {
  px_to_mm = resolutions[event.target.value]
  slice_mm_label.textContent = `~ ${(slice_size * px_to_mm).toFixed(2)} mm`
  size_mm_label.textContent = `~ ${(render_size * px_to_mm).toFixed(2)} mm`
})
resolution.append(resolution_input)
resolution.append(resolution_label)
scanimation_settings.append(resolution)

// input to set number of frames of the animation
const frames = document.createElement('div')
const frames_label = document.createElement('label')
frames_label.textContent = 'Frames'
const frames_input = document.createElement('input')
frames_input.type = 'number'
frames_input.min = 3
frames_input.max = 20
frames_input.value = frames_amount
frames_input.addEventListener('input', (event) => {
  frames_amount = Number(event.target.value)
})
frames.append(frames_input)
frames.append(frames_label)
scanimation_settings.append(frames)

// input to set loop mode
const loop = document.createElement('div')
loop.id = 'loop-control'
const loop_label = document.createElement('label')
loop_label.textContent = 'Loop animation'
const loop_switch = document.createElement('div')
loop_switch.classList.add('switch', 'active')
loop_switch.addEventListener('click', () => {
  loop_on = !loop_on
  loop_switch.classList.toggle('active')
})
const loop_switch_dot = document.createElement('span')
loop_switch_dot.classList.add('switch-dot')
loop_switch.append(loop_switch_dot)
loop.append(loop_switch)
loop.append(loop_label)
scanimation_settings.append(loop)

// input to set size of one slice to cut the images
const slice = document.createElement('div')
const slice_label = document.createElement('label')
slice_label.textContent = 'Slice size in px'
const slice_mm_label = document.createElement('span')
slice_mm_label.textContent = `~ ${(slice_size * px_to_mm).toFixed(2)} mm`
slice_label.append(slice_mm_label)
const slice_input = document.createElement('input')
slice_input.type = 'number'
slice_input.min = 1
slice_input.max = 20
slice_input.value = slice_size
slice_input.addEventListener('input', (event) => {
  slice_size = Number(event.target.value)
  slice_mm_label.textContent = `~ ${(slice_size * px_to_mm).toFixed(2)} mm`
})
slice.append(slice_input)
slice.append(slice_label)
scanimation_settings.append(slice)

// input to set smoothness of curves for morphing
const smoothness = document.createElement('div')
const smoothness_label = document.createElement('label')
smoothness_label.textContent = 'Curve smoothness'
const smoothness_input = document.createElement('input')
smoothness_input.type = 'number'
smoothness_input.min = 1
smoothness_input.max = 10
smoothness_input.value = curves_smoothness
smoothness_input.addEventListener('input', (event) => {
  curves_smoothness = Number(event.target.value)
})
smoothness.append(smoothness_input)
smoothness.append(smoothness_label)
scanimation_settings.append(smoothness)

// input to set direction of the animation
const direction = document.createElement('div')
const direction_label = document.createElement('label')
direction_label.textContent = 'Animation direction'
const direction_input = document.createElement('select')
animation_axes.map((direction) => {
  const option = document.createElement('option')
  option.text = direction
  direction_input.append(option)
})
direction_input.value = animation_axis
direction_input.addEventListener('input', (event) => {
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

// set frame svg to draw each path frame with blur effect kept
const [frame_svg, frame_path, frame_blur] = draw_svg_path()

// set frame canvas to draw each svg frame with effect before slicing
const frame_canvas = document.createElement('canvas')
frame_canvas.className = 'frame-canvas'
const frame_context = frame_canvas.getContext('2d')

// button to generate the scanimation grid & sliced image
const scanimate_button = document.createElement('button')
scanimate_button.id = 'scanimate-button'
scanimate_button.textContent = 'Scanimate!'
scanimate_button.addEventListener('click', async () => {
  // pause video
  paused = true
  video_button.textContent = 'Play animation'

  // clear render canvas & grids to redraw if already drawn on
  render_context.clearRect(0, 0, 2000, 2000) // value that should be big enough to clear everything
  const grid_slices = [...grid_hiders.children, ...grid_cutouts.children]
  grid_slices.forEach((slice) => slice.remove())

  // set canvas size
  render_canvas.width = render_size
  render_canvas.height = render_size

  // set grids size
  const grid_viewbox = `0 0 ${render_size} ${render_size}`
  grid_cutouts.setAttribute('viewBox', grid_viewbox)
  grid_cutouts.setAttribute('width', render_size)
  grid_cutouts.setAttribute('height', render_size)
  grid_hiders.setAttribute('viewBox', grid_viewbox)
  grid_hiders.setAttribute('width', render_size)
  grid_hiders.setAttribute('height', render_size)

  // reset grid slider & position on new scanimation
  translate_grid = 0
  grid_slider.value = 0
  grid_slider.step = slice_size / 10
  grid_slider.min = -(slice_size * 10)
  grid_slider.max = slice_size * 10
  grids.style.transform = `translate(0px)`

  // disable download buttons
  download_render_button.disabled = true
  download_grid_hiders_button.disabled = true
  download_grid_cutouts_button.disabled = true

  // hide the animation playground
  morph_shape.classList.add('hidden')
  video_button.classList.add('hidden')
  shape_selectors.classList.add('hidden')

  // hide scanimation render
  grid_slider.classList.add('hidden')
  grid_label.classList.add('hidden')
  hide_grid_button.classList.add('hidden')
  set_grid_mode_button.classList.add('hidden')

  // display the loader & disable pointer events
  loader.classList.remove('hidden')
  body.style.pointerEvents = 'none'

  // re-render DOM before starting to load interpolator
  await sleep(10)

  // set interpolator with custom curves smoothness
  const { start, end } = morph_paths
  const smoothness = { maxSegmentLength: curves_smoothness }
  const interpolator = flubber.interpolate(start, end, smoothness)

  const is_horizontal_axis = animation_axis === 'Horizontal'

  // set slice variables according to animation direction
  const slice_height = is_horizontal_axis ? render_size : slice_size
  const slice_width = is_horizontal_axis ? slice_size : render_size

  // slice the image in equal sections according to the settings
  const slices_amount = render_size / slice_size

  // get the total frames amount; in case the loop is on, the amount is increased
  const loop_frames_amount = frames_amount + (frames_amount - 2)
  const frames_amount_sum = loop_on ? loop_frames_amount : frames_amount

  // set size for the frame canvas to be drawn calibrated on the render size:
  // make the image a bit smaller to add padding around to have some space to move the grid
  const render_padding = render_size * render_padding_ratio
  const frame_canvas_size = render_size - render_padding
  const frame_ratio = frame_canvas_size / shape_viewbox_size
  frame_canvas.width = frame_canvas_size
  frame_canvas.height = frame_canvas_size

  // draw on the canvas for each frame to then slice the image
  for (let frame = 0; frame < frames_amount_sum; frame++) {
    // draw the corresponding morph steph path
    // if the loop is on, past the last animation frame, the frames go reverse
    const has_reached_animation_end = frame > frames_amount - 1
    const reversed_frame = frame - (frame - (frames_amount - 1)) * 2
    const frame_step = has_reached_animation_end ? reversed_frame : frame
    const morph_step = frame_step / (frames_amount - 1)

    // draw the frame step path on the frame svg
    frame_path.setAttribute('d', interpolator(morph_step))
    frame_path.setAttribute('fill', fill_color)
    frame_path.setAttribute('stroke-width', `${stroke_width}px`)
    frame_blur.setAttribute('stdDeviation', blur_filter)

    // create a url for the svg
    const { outerHTML: svg_html } = frame_svg
    const blob = new Blob([svg_html], { type: 'image/svg+xml;charset=utf-8' })
    const URL = window.URL || window.webkitURL || window
    const blobURL = URL.createObjectURL(blob)

    // convert the svg as an image from the url
    const path_image = new Image()
    path_image.src = blobURL
    path_image.onload = () => {
      // draw the image on the frame canvas
      const draw_image_coords = [0, 0, frame_canvas_size, frame_canvas_size]
      frame_context.drawImage(path_image, ...draw_image_coords)

      // slice the image frame and draw the visible slices to the render:
      // first slice to display starts from the current frame, then jump to next slice that
      // has to be drawn; ignore slices in between that will be the other frames' slices
      for (
        let slice = frame;
        slice < slices_amount;
        slice += frames_amount_sum
      ) {
        // get coords to copy the slice from the frame canvas
        const copy_x = is_horizontal_axis ? slice * slice_size : 0
        const copy_y = is_horizontal_axis ? 0 : slice * slice_size
        const copy_coords = [copy_x, copy_y, slice_width, slice_height]
        const copied_pixels = frame_context.getImageData(...copy_coords)

        // set coords to paste the slice to the render canvas
        const paste_padding = render_padding / 2
        const paste_coords = [copy_x + paste_padding, copy_y + paste_padding] // add padding around the image
        render_context.putImageData(copied_pixels, ...paste_coords)
      }

      // clear the frame canvas before drawing the next frame
      frame_context.clearRect(0, 0, 2000, 2000)
      URL.revokeObjectURL(blobURL)
    }
  }

  // create the grids by hiding the slices in equal sections according to the settings
  for (let slice = 0; slice < slices_amount; slice += frames_amount_sum) {
    const hider_x = is_horizontal_axis ? slice * slice_size : 0
    const hider_y = is_horizontal_axis ? 0 : slice * slice_size
    const hider_size = slice_size * (frames_amount_sum - 1)
    const hider_width = is_horizontal_axis ? hider_size : render_size
    const hider_height = is_horizontal_axis ? render_size : hider_size

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
    const cutout_width = is_horizontal_axis ? slice_size : render_size
    const cutout_height = is_horizontal_axis ? render_size : slice_size

    const cutout = document.createElementNS(w3_url, 'rect')
    cutout.setAttribute('x', cutout_x)
    cutout.setAttribute('y', cutout_y)
    cutout.setAttribute('width', cutout_width)
    cutout.setAttribute('height', cutout_height)
    cutout.setAttribute('class', 'cutout')
    grid_cutouts.append(cutout)
  }

  // remove the loader & enable pointer events
  loader.classList.add('hidden')
  body.style.pointerEvents = 'all'

  // show the scanimation render
  back_button.classList.remove('hidden')
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

  // enable download buttons
  download_render_button.disabled = false
  download_grid_hiders_button.disabled = false
  download_grid_cutouts_button.disabled = false
})

scanimation_settings.append(scanimate_button)

// export render in png
const download_render = () => {
  const params = `${frames_amount}fr-${slice_size}px${loop_on ? '-loop' : ''}`
  const file_name = `scanimation-${params}-render`
  const link = document.createElement('a')
  const image = render_canvas
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream')
  link.href = image
  link.download = `${file_name}.png`
  link.click()
  link.remove()
}

const download_render_button = document.createElement('button')
download_render_button.className = 'download'
download_render_button.disabled = true
download_render_button.textContent = 'Download render'
download_render_button.addEventListener('click', download_render)
controls_panel.append(download_render_button)

// export grid in svg or png
const download_grid = (format = 'png') => {
  const svg_format = format === 'svg'
  const png_format = format === 'png'

  const svg = svg_format ? grid_cutouts : grid_hiders
  const cloned_svg = svg.cloneNode(true)
  cloned_svg.removeAttribute('style')
  cloned_svg.removeAttribute('width')
  cloned_svg.removeAttribute('height')

  const { outerHTML: svg_html } = cloned_svg
  const blob = new Blob([svg_html], { type: 'image/svg+xml;charset=utf-8' })
  const URL = window.URL || window.webkitURL || window
  const blobURL = URL.createObjectURL(blob)

  const link = document.createElement('a')
  const params = `${frames_amount}fr-${slice_size}px${loop_on ? '-loop' : ''}`
  const file_name = `scanimation-${params}-grid${svg_format ? '-cutouts' : ''}`

  if (png_format) {
    const image = new Image()
    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = render_size
      canvas.height = render_size
      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, render_size, render_size)

      const png = canvas.toDataURL('image/png')
      link.href = png
      link.download = `${file_name}.png`
      link.click()
      link.remove()
    }
    image.src = blobURL
  }

  if (svg_format) {
    link.href = blobURL
    link.download = `${file_name}.svg`
    link.click()
    link.remove()
  }
}

const download_grid_hiders_button = document.createElement('button')
download_grid_hiders_button.className = 'download'
download_grid_hiders_button.disabled = true
download_grid_hiders_button.textContent = 'Download grid in PNG'
download_grid_hiders_button.addEventListener('click', () =>
  download_grid('png'),
)
controls_panel.append(download_grid_hiders_button)

const download_grid_cutouts_button = document.createElement('button')
download_grid_cutouts_button.className = 'download'
download_grid_cutouts_button.disabled = true
download_grid_cutouts_button.textContent = 'Download grid cutouts in SVG'
download_grid_cutouts_button.addEventListener('click', () =>
  download_grid('svg'),
)
controls_panel.append(download_grid_cutouts_button)

const back_button = document.createElement('button')
back_button.id = 'back-button'
back_button.textContent = 'Back to animation'

body.append(back_button)

back_button.addEventListener('click', () => {
  // hide scanimation render
  back_button.classList.add('hidden')
  render_canvas.classList.add('hidden')
  grids.classList.add('hidden')
  hide_grid_button.classList.add('hidden')
  set_grid_mode_button.classList.add('hidden')
  grid_slider.classList.add('hidden')
  grid_label.classList.add('hidden')

  // show the animation playground
  morph_shape.classList.remove('hidden')
  video_button.classList.remove('hidden')
  shape_selectors.classList.remove('hidden')
})
