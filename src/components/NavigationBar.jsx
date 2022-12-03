import React, {useState} from 'react'
import logo from '../assets/LalondeMarion-logo-white.png';
import darklogo from '../assets/LalondeMarion-logo.png';

function NavigationBar({theme, toggleTheme}) {
    const [navbar, setNavbar] = useState(false);

  return (
<nav className="navbar ">
      <div className="justify-between mx-autol md:items-center flex">
       
            <a href="/" className="flex items-center">
             {theme === 'light' ? <img src={logo} alt="Lalonde Marion - Portfolio" className="h-14 w-14" /> : <img src={darklogo} alt="Lalonde Marion - Portfolio" className="h-14 w-14" />}
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" />
            </a>

            {/*  */}
            <div className="block">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#eee" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
                
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke={theme ==="light" ? "currentColor" : "#eee"} className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                  
                )}
              </button>
            </div>
          </div>

        <div>
          <div
            className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
              navbar
                ? "block absolute top-0 left-0 bg-[#686894] w-screen  h-screen z-10 "
                : "hidden"
            }`}
          >
            
            <ul className={navbar? " flex flex-col items-end space-y-8 m-8 text-4xl " : "hidden"}>
                <li className=" text-gray-600  text-right pr-3">
                <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => setNavbar(!navbar)} fill="#eee" viewBox="0 0 24 24" strokeWidth="1" stroke="#eee" className="w-12 h-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            
                </li>
              <li className="text-[#eee]  text-right pr-3">
                <a href="#project" onClick={() => setNavbar(!navbar)}>Project</a>
              </li>
              <li className="text-[#eee] text-right pr-3">
              <a href="#contact" onClick={() => setNavbar(!navbar)}>Contact</a>
              </li>
              <li className='cursor-pointer mr-3' onClick={toggleTheme}>{theme ==='light' ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#eee'><path d="M10.741 17h-1.991c0-.17-.016-.338-.035-.506l1.703-1.548c.197.653.323 1.332.323 2.054zm-.04 6.659c.19.216.465.341.753.341h1.093c.288 0 .562-.125.752-.341l1.451-1.659h-5.5l1.451 1.659zm3.799-3.659h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0-2h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm1.707-8.315c-1.104 2.28-2.948 4.483-2.949 7.315h1.992c0-3.169 3.479-5.906 3.726-9.832l-2.769 2.517zm6.793-8.201l-20.654 18.75-1.346-1.5 6.333-5.728c-1.062-1.873-2.333-3.843-2.333-6.272 0-4.343 3.498-6.734 6.996-6.734 2.408 0 4.798 1.146 6.064 3.267l3.598-3.267 1.342 1.484zm-14.147 10.142l7.676-6.969c-.833-1.742-2.682-2.657-4.533-2.657-2.483 0-4.996 1.626-4.996 4.734 0 1.713.907 3.246 1.853 4.892z"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#eee'><path d="M19 6.734c0 4.672-4.25 7.079-4.25 12.266h-5.5c0-5.187-4.25-7.594-4.25-12.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4.75 13.266h-4.5c-.276 0-.5.224-.5.5s.224.5.5.5h4.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-5l1.451 1.659c.19.216.464.341.753.341h.593c.288 0 .563-.125.752-.341l1.451-1.659z"/></svg>
        
        }</li>
            </ul>
          </div>
        </div>
 </nav>
  )
}
  

export default NavigationBar