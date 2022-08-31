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

// set up the html elements
// create the container
const shape = document.createElement('div')
shape.id = `shape`
shape.className = 'shape'

// create the svg shape
const svg = document.createElementNS(w3_url, 'svg')
svg.setAttribute('viewBox', '0 0 1000 1000')

// create the path
const morph_path = document.createElementNS(w3_url, 'path')
morph_path.setAttribute('d', morph_paths.start)
morph_path.setAttribute('fill', 'blueviolet')

// append all elements
svg.append(morph_path)
shape.append(svg)
body.append(shape)

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
  svg.setAttribute('viewBox', '0 0 1000 1000')

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

// scanimation settings
let frames_amount = 4
let slice_size = 2
let curves_smoothness = 5
const animation_directions = ['Horizontal', 'Vertical']
let animation_direction = animation_directions[0]

const scanimation_settings = document.createElement('div')
scanimation_settings.id = 'scanimation-settings'

// input to set number of frames of the animation
const frames = document.createElement('div')
const frames_label = document.createElement('label')
frames_label.textContent = 'Frames'
const frames_input = document.createElement('input')
frames_input.type = 'number'
frames_input.min = 3
frames_input.max = 20
frames_input.value = frames_amount
frames_input.addEventListener('click', (event) => {
  frames_amount = Number(event.target.value)
})
frames.append(frames_input)
frames.append(frames_label)
scanimation_settings.append(frames)

// input to set size of one slice to cut the images
const slice = document.createElement('div')
const slice_label = document.createElement('label')
slice_label.textContent = 'Slice size'
const slice_input = document.createElement('input')
slice_input.type = 'number'
slice_input.min = 1
slice_input.max = 20
slice_input.value = slice_size
slice_input.addEventListener('click', (event) => {
  slice_size = Number(event.target.value)
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
smoothness_input.addEventListener('click', (event) => {
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
animation_directions.map((direction) => {
  const option = document.createElement('option')
  option.text = direction
  direction_input.append(option)
})
direction_input.value = animation_direction
direction_input.addEventListener('change', (event) => {
  animation_direction = event.target.value
})
direction.append(direction_input)
direction.append(direction_label)
scanimation_settings.append(direction)

const loader = document.createElement('div')
loader.id = 'loader'
loader.textContent = 'Scanimating...'
body.append(loader)

// size of the render canvas
const render_export_size = 1000 // in px to be exported
const render_display_size = 65 // in vh to be displayed on the page

// make the grid 15% bigger than the canvas to move it around
const grid_inc = 0.15
const grid_export_size = render_export_size + render_export_size * grid_inc
const grid_display_size = render_display_size + render_display_size * grid_inc

// set render canvas to draw the scanimation image result
const render_canvas = document.createElement('canvas')
const render_context = render_canvas.getContext('2d')
render_canvas.id = 'render-canvas'
render_canvas.className = 'displayable-canvas'
render_canvas.width = render_export_size // width fitting the svg viewBox width
render_canvas.height = render_export_size // height fitting the svg viewBox height
render_canvas.style.width = `${render_display_size}vh` // to do: add as customisable setting in the panel
render_canvas.style.height = `${render_display_size}vh` // to do: add as customisable setting in the panel
body.append(render_canvas)

// set grid canvas to draw the grid to animate the image result
const grid_canvas = document.createElement('canvas')
const grid_context = grid_canvas.getContext('2d')
grid_canvas.id = 'grid-canvas'
grid_canvas.className = 'displayable-canvas'
grid_canvas.width = grid_export_size // width fitting the svg viewBox width + 15%
grid_canvas.height = grid_export_size // height fitting the svg viewBox height + 15%
grid_canvas.style.width = `${grid_display_size}vh` // to do: add as customisable setting in the panel
grid_canvas.style.height = `${grid_display_size}vh` // to do: add as customisable setting in the panel
body.append(grid_canvas)

// create a grid slider to move the grid on top of the scanimation image
// and have an overview of the animation
const grid_slider = document.createElement('input')
grid_slider.id = 'grid-slider'
grid_slider.type = 'range'
grid_slider.min = -(slice_size * 10)
grid_slider.max = slice_size * 10
grid_slider.value = 0
grid_slider.step = slice_size / 10

const grid_label = document.createElement('label')
grid_label.id = 'grid-label'
grid_label.textContent = 'Slide here or scroll to move the grid & animate!'
body.append(grid_label)

let translate_grid = 0

// move the grid with the slider
grid_slider.addEventListener('input', (event) => {
  translate_grid = Number(event.target.value)
  const axis = animation_direction === 'Horizontal' ? 'X' : 'Y'
  grid_canvas.style.transform = `translate${axis}(${translate_grid}px)`
})

// move the grid on scroll
grid_canvas.addEventListener('mousewheel', (event) => {
  const step = Number(grid_slider.step)
  const inc = event.deltaY < 0 ? -step : step
  translate_grid += inc
  const axis = animation_direction === 'Horizontal' ? 'X' : 'Y'
  grid_canvas.style.transform = `translate${axis}(${translate_grid}px)`
  grid_slider.value = translate_grid
})
body.append(grid_slider)

// set frame canvas to draw each frame of the animation
// and copy paste the selected slices on the render canvas
const frame_canvas = document.createElement('canvas')
const frame_context = frame_canvas.getContext('2d')
frame_canvas.width = render_export_size // width fitting the svg viewBox width
frame_canvas.height = render_export_size // height fitting the svg viewBox height

// button to generate the scanimation grid & sliced image
const scanimate_button = document.createElement('button')
scanimate_button.id = 'scanimate-button'
scanimate_button.textContent = 'Scanimate!'
scanimate_button.addEventListener('click', async () => {
  // pause video
  paused = true
  video_button.textContent = 'Play animation'

  // clear render & grid canvases to redraw if already drawn on
  render_context.clearRect(0, 0, render_export_size, render_export_size)
  render_canvas.style.display = 'block'
  grid_context.clearRect(0, 0, grid_export_size, grid_export_size)
  grid_canvas.style.display = 'block'

  // reset grid slider on new scanimation
  translate_grid = 0
  grid_slider.value = 0
  grid_slider.step = slice_size / 10
  grid_slider.min = -(slice_size * 10)
  grid_slider.max = slice_size * 10

  // display the loader
  loader.classList.add('visible')

  // re-render DOM before starting to load interpolator
  await sleep(10)

  // set interpolator with custom curves smoothness
  const { start, end } = morph_paths
  const smoothness = { maxSegmentLength: curves_smoothness }
  const interpolator = flubber.interpolate(start, end, smoothness)

  const is_horizontal_animation = animation_direction === 'Horizontal'

  // set slice variables according to animation direction
  const slice_height = is_horizontal_animation ? render_export_size : slice_size
  const slice_width = is_horizontal_animation ? slice_size : render_export_size

  // slice the image in equal sections according to the settings
  const slices_amount = render_export_size / slice_size

  // create a canvas for each frame to slice the image
  for (let frame = 0; frame < frames_amount; frame++) {
    // draw the corresponding morph steph path
    const frame_step = frame / (frames_amount - 1)
    const frame_path = new Path2D(interpolator(frame_step))
    frame_context.fill(frame_path)

    // first slice to display starts from the current frame
    // then jump to next slice that has to be drawn:
    // ignore slices in between that will be the other frames' slices
    for (let slice = frame; slice < slices_amount; slice += frames_amount) {
      const start_x = is_horizontal_animation ? slice * slice_size : 0
      const start_y = is_horizontal_animation ? 0 : slice * slice_size
      const coords = [start_x, start_y, slice_width, slice_height]

      // copy the selected slice from the current frame canvas
      const pixels = frame_context.getImageData(...coords)
      // paste the selected slice to the final canvas
      render_context.putImageData(pixels, start_x, start_y)
    }

    // clear the frame canvas to draw next frame
    frame_context.clearRect(0, 0, render_export_size, render_export_size)
  }

  // hide the slices in equal sections according to the settings
  const hiders_amount = grid_export_size / slice_size

  // create the grid
  for (let hider = 0; hider < hiders_amount; hider += frames_amount) {
    const start_x = is_horizontal_animation ? hider * slice_size : 0
    const start_y = is_horizontal_animation ? 0 : hider * slice_size

    const hider_size = slice_size * (frames_amount - 1)
    const hider_width = is_horizontal_animation ? hider_size : grid_export_size
    const hider_height = is_horizontal_animation ? grid_export_size : hider_size

    const coords = [start_x, start_y, hider_width, hider_height]

    // fill the selected slice to the grid canvas
    grid_context.fillRect(...coords)
  }

  // remove the loader
  loader.classList.remove('visible')

  // hide the animation playground
  shape.style.display = 'none'
  buttons.style.display = 'none'
  shape_selectors.style.display = 'none'

  grid_slider.style.display = 'block'
  grid_label.style.display = 'block'
  back_button.style.display = 'block'
})

const back_button = document.createElement('button')
back_button.id = 'back-button'
back_button.textContent = 'Back to animation'

body.append(back_button)

back_button.addEventListener('click', () => {
  // hide scanimation render
  render_canvas.style.display = 'none'
  grid_canvas.style.display = 'none'
  back_button.style.display = 'none'
  grid_slider.style.display = 'none'
  grid_label.style.display = 'none'

  // show the animation playground
  shape.style.display = 'flex'
  buttons.style.display = 'flex'
  shape_selectors.style.display = 'flex'
})

scanimation_settings.append(scanimate_button)
body.append(scanimation_settings)
