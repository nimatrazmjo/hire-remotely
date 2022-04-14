import Link from 'next/link'

function TopNavComponent() {
  return (
    <header className="bg-primary py-5">
      <nav className="container flex mx-auto text-white">
        <Link  href="/" >
        <svg width="150px" height="29px" className="cursor-pointer" >
          <g>
            <path d="M42.136,22.299c0.512-0.792,0.768-1.7,0.768-2.724c0-0.784-0.111-1.485-0.313-2.119
              c-0.179-0.562-0.449-1.057-0.787-1.501l-4.231,0.51l-3.717,0.448l-4.512,0.543v12.079h4.512v-4.512h1.272
              c0.336,0,0.596,0.06,0.779,0.18c0.185,0.12,0.34,0.324,0.469,0.611l1.632,3.721h4.704l-1.776-4.057
              c-0.16-0.367-0.304-0.647-0.432-0.839c-0.129-0.192-0.28-0.36-0.456-0.504C40.928,23.703,41.623,23.091,42.136,22.299z
              M37.756,21.051c-0.36,0.344-0.868,0.516-1.524,0.516h-2.376v-4.032h2.521c1.279,0,1.92,0.68,1.92,2.04
              C38.296,20.215,38.115,20.707,37.756,21.051z" fill="#FFD500" />
            <polygon points="45.663,17.456 45.663,29.535 57.375,29.535 57.375,26.079 50.175,26.079 50.175,23.559
              56.487,23.559 56.487,20.055 50.175,20.055 50.175,17.535 57.375,17.535 57.375,17.456 57.375,14.079 45.663,15.49" fill="#FFD500" />
            <polygon points="68.127,21.927 64.287,14.079 59.896,14.079 59.896,29.535 64.407,29.535 64.407,21.807
              66.903,26.895 69.327,26.895 71.8,21.807 71.8,29.535 76.312,29.535 76.312,14.079 71.943,14.079" fill="#FFD500" />
            <path d="M86.967,13.839c-2.624,0-4.596,0.632-5.916,1.896s-1.98,3.304-1.98,6.12c0,2.736,0.664,4.74,1.992,6.012
              s3.296,1.908,5.904,1.908c2.607,0,4.575-0.64,5.904-1.921c1.327-1.279,1.991-3.279,1.991-6c0-2.8-0.659-4.836-1.979-6.108
              S89.591,13.839,86.967,13.839z M89.475,24.963c-0.521,0.648-1.355,0.971-2.508,0.971s-1.988-0.323-2.508-0.971
              c-0.521-0.648-0.78-1.684-0.78-3.108c0-1.503,0.256-2.576,0.768-3.216c0.513-0.64,1.353-0.96,2.521-0.96s2.008,0.32,2.52,0.96
              c0.513,0.64,0.769,1.712,0.769,3.216C90.255,23.279,89.994,24.314,89.475,24.963z" fill="#FFD500" />
            <polygon points="95.343,17.438 99.687,17.438 99.687,29.535 104.198,29.535 104.198,17.438 108.543,17.438
              108.543,14.079 95.343,14.079" fill="#FFD500" />
            <polygon points="110.822,29.535 122.534,29.535 122.534,26.079 115.334,26.079 115.334,23.559 121.646,23.559
              121.646,20.055 115.334,20.055 115.334,17.535 122.534,17.535 122.534,14.079 110.822,14.079" fill="#FFD500" />
            <polygon points="129.566,14.079 125.055,14.079 125.055,29.535 136.526,29.535 136.526,26.079 129.566,26.079" fill="#FFD500" />
            <polygon points="145.792,14.079 142.67,19.911 139.551,14.079 134.846,14.079 140.415,23.871 140.415,29.535
              144.926,29.535 144.926,23.871 150.495,14.079" fill="#FFD500" />
            <polygon points="9.84,5.76 4.512,5.76 4.512,0 0,0 0,15.456 4.512,15.456 4.512,9.696 9.84,9.696 9.84,15.456
              14.352,15.456 14.352,0 9.84,0" fill="#005BBB" />
            <rect x="17.592" width="4.512" height="15.456" fill="#005BBB" />
            <path d="M29.855,12.079v-1.135h1.272c0.336,0,0.596,0.06,0.779,0.18c0.185,0.12,0.34,0.324,0.469,0.612l0.15,0.343
              l1.046,2.386l4.231-0.51l0.238-0.028l-0.809-1.848L36.936,11.4c-0.16-0.368-0.304-0.648-0.432-0.84
              c-0.129-0.192-0.28-0.36-0.456-0.504c0.88-0.432,1.575-1.044,2.088-1.836c0.512-0.792,0.768-1.7,0.768-2.724
              c0-1.68-0.464-3.016-1.392-4.008S35.208,0,33.384,0h-8.04v12.079v3.377l4.512-0.543V12.079z M29.855,3.456h2.521
              c1.279,0,1.92,0.68,1.92,2.04c0,0.64-0.181,1.132-0.54,1.476c-0.36,0.344-0.868,0.516-1.524,0.516h-2.376V3.456z" fill="#005BBB" />
            <polygon points="53.375,12 46.175,12 46.175,9.48 52.487,9.48 52.487,5.976 46.175,5.976 46.175,3.456
              53.375,3.456 53.375,0 41.663,0 41.663,12.079 41.663,13.49 53.375,12.079" fill="#005BBB" />
          </g>
        </svg>
        </Link>
      </nav>
    </header>
  )
}
export default TopNavComponent