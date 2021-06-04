import { useState } from 'react'

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <nav className="bg-gray-100">
      <div className="px-10 py-3 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            {/* logo */}
            <div>
              <a className="flex items-center py-2 px-2" href="/">
                <svg className="h-8 w-8 mr-2" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path d="M69.375 58.625L64.075 53.325L1.09999 116.3C-0.375006 117.775 -0.375006 120.15 1.09999 121.6L3.74999 124.25L6.39999 126.9C7.87499 128.375 10.25 128.375 11.7 126.9L74.675 63.925L69.375 58.625Z" fill="#3B4A51" />
                    <path d="M11.7 126.9L74.675 63.925L69.375 58.625L3.75 124.25L6.4 126.9C7.875 128.375 10.25 128.375 11.7 126.9Z" fill="#293939" />
                    <path d="M67.45 11.975L65.5 4.72498C64.975 2.72498 66.15 0.674982 68.15 0.124982C70.15 -0.425018 72.2 0.774982 72.75 2.77498L74.7 10.025C75.225 12.025 74.05 14.075 72.05 14.625C70.025 15.15 67.975 13.95 67.45 11.975Z" fill="#FED843" />
                    <path d="M88.8 91.65L86.85 84.4C86.325 82.4 87.5 80.35 89.5 79.8C91.5 79.25 93.55 80.45 94.1 82.45L96.05 89.7C96.575 91.7 95.4 93.75 93.4 94.3C91.375 94.85 89.325 93.65 88.8 91.65Z" fill="#FABE2C" />
                    <path d="M33.7 34.6C34.225 32.6 36.3 31.4 38.3 31.95L45.55 33.9C47.55 34.425 48.725 36.5 48.2 38.5C47.675 40.5 45.6 41.7 43.6 41.15L36.35 39.2C34.375 38.675 33.15 36.625 33.7 34.6Z" fill="#FED843" />
                    <path d="M113.375 55.95C113.9 53.95 115.975 52.75 117.975 53.3L125.225 55.25C127.225 55.775 128.425 57.85 127.875 59.85C127.325 61.85 125.275 63.05 123.275 62.5L116.025 60.55C114.05 60.025 112.85 57.975 113.375 55.95Z" fill="#FABE2C" />
                    <path d="M115.25 12.75C113.775 11.275 111.4 11.275 109.95 12.75L104.65 18.05C103.175 19.525 103.175 21.9 104.65 23.35C106.125 24.825 108.5 24.825 109.95 23.35L115.25 18.05C116.725 16.575 116.725 14.225 115.25 12.75Z" fill="#FED843" />
                    <path d="M109.95 23.35L115.25 18.05C116.725 16.575 116.725 14.225 115.25 12.75L104.65 23.35C106.1 24.825 108.475 24.825 109.95 23.35Z" fill="#FABE2C" />
                    <path d="M120.625 36.55C120.225 35.075 118.975 33.975 117.45 33.8L96.7 31.325L94.225 10.575C94.05 9.05 92.95 7.8 91.475 7.4C90 7 88.425 7.55 87.5 8.775L74.975 25.525L55.75 17.25C54.35 16.65 52.7 16.95 51.625 18.05C50.55 19.125 50.225 20.775 50.825 22.175L59.05 41.4L42.3 53.925C41.075 54.85 40.525 56.425 40.925 57.9C41.325 59.375 42.575 60.475 44.1 60.65L64.875 63.125L67.35 83.9C67.525 85.45 68.65 86.7 70.1 87.075C71.575 87.475 73.15 86.925 74.075 85.7L86.6 68.95L105.825 77.175C107.225 77.775 108.875 77.475 109.95 76.375C111.025 75.275 111.35 73.65 110.75 72.25L102.5 53.025L119.25 40.5C120.475 39.6 121.025 38.025 120.625 36.55Z" fill="#FED843" />
                    <path d="M70.1 87.075C71.575 87.475 73.15 86.925 74.075 85.7L86.6 68.95L105.825 77.175C107.225 77.775 108.875 77.475 109.95 76.375C111.025 75.275 111.35 73.65 110.75 72.25L102.5 53.025L119.25 40.5C120.475 39.575 121.025 38 120.625 36.525C120.225 35.05 118.975 33.95 117.45 33.775L96.7 31.3L64.875 63.125L67.35 83.9C67.525 85.425 68.65 86.675 70.1 87.075Z" fill="#FABE2C" />
                    <path d="M89.875 37.475L88.1 22.6C88.025 21.925 87.15 21.7 86.75 22.25L77.775 34.25C77.575 34.525 77.2 34.625 76.875 34.5L63.125 28.6C62.5 28.325 61.875 28.975 62.15 29.575L68.05 43.325C68.175 43.65 68.075 44.025 67.8 44.225L55.825 53.2C55.275 53.6 55.525 54.475 56.175 54.55L71.05 56.325C71.225 56.35 71.375 56.425 71.5 56.55L90.1 37.95C89.975 37.8 89.9 37.65 89.875 37.475Z" fill="#DAF1F8" />
                    <path d="M105.4 39.9L90.525 38.125C90.35 38.1 90.2 38.025 90.075 37.9L71.475 56.5C71.6 56.625 71.675 56.775 71.7 56.95L73.475 71.825C73.55 72.5 74.425 72.725 74.825 72.175L83.8 60.2C84 59.925 84.375 59.825 84.7 59.95L98.45 65.85C99.075 66.125 99.7 65.475 99.425 64.875L93.525 51.125C93.4 50.8 93.5 50.425 93.775 50.225L105.775 41.25C106.3 40.85 106.05 39.975 105.4 39.9Z" fill="#BFE7F6" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="128" height="128" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-lg font-bold">Where's the Magic?</span>
              </a>
            </div>
            {/* search */}
            <div className="hidden md:block px-2 py-2 relative rounded-md">
              <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
                <button type="submit" className="text-gray-500 sm:text-sm">                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1"
                  viewBox="0 0 56.966 56.966"
                  width="512px" height="512px">
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                </button>
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="form-input w-full md:w-80 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md pl-9"
                placeholder="Search for a movie"
              />

            </div>
          </div>

          {/* secondary nav */}
          <div className="hidden md:flex flex items-center space-x-4">
            <a className="py-2 px-2" href="/login">Log In</a>
            <a className="py-2 px-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-700 rounded transition duration-300" href="/signup">Sign Up</a>
          </div>

          {/* mobile button */}
          <div className="mobile-menu-button md:hidden flex items-center">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={showMobileMenu ? "mobile-menu text-center px-4 py-3" : "mobile-menu text-center hidden"}>
        <div className="px-2 py-2 relative rounded-md">
          <div className="absolute inset-y-0 left-2 pl-3 flex items-center pointer-events-none">
            <button type="submit" className="text-gray-500 sm:text-sm">                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1"
              viewBox="0 0 56.966 56.966"
              width="512px" height="512px">
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
            </button>
          </div>
          <input
            type="search"
            name="search"
            id="search"
            className="form-input w-full md:w-80 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-gray-300 rounded-md pl-9"
            placeholder="Search for a movie"
          />

        </div>
        <a className="block py-2 px-4 bg-gray-400 hover:bg-gray-300 text-gray-800 hover:text-gray-700 rounded transition duration-300" href="/login">Log In</a>
        <a className="block py-2 px-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-700 rounded transition duration-300" href="/signup">Sign Up</a>
      </div>
    </nav>
  )
}

export default NavBar
