import React from 'react'
import Project from '../components/Project'
import { Link } from "react-scroll";



export default function Home({projects, theme}) {
  return (
    <>
    <main  id="home" className=" h-5/6  flex flex-col justify-center items-center">
        <p className=' py-6 w-4/6 text-xl'> Hey 👋🏻<br></br>
I am <span className='inline text-2xl  text-[#FF9D8B] underline'>Marion Lalonde</span>, I’m a front-end developer 👩🏻‍💻<br></br>
I want to build accessible experiences that bring people together in the digital world,
 the physical world, or somewhere in between. <br></br>Oh, and I’m in love with matcha latte. 
 <br></br>
 {/* Adding link to pages */}
 <span className='font-extralight text-[#686894]'><Link to="project" activeClass="active" className='cursor-pointer'
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>PROJECT</Link> - <Link to="contact" activeClass="active" className='cursor-pointer'
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>CONTACT</Link></span>
</p>

    </main>
<div className='flex justify-center animate-bounce'>
<Link to="project" activeClass="active"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
        
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#FF9D8B" className="w-10 h-10 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg></Link>

</div>
    <section id='project' className={theme==='light' ? 'flex justify-center w-screen ': 'flex justify-center w-screen bg-[#3E3D3D]'}>
    <div className=" relative  h-100 grid grid-cols-1 md:grid-cols-2 md:gap-6 w-screen m-8 justify-items-center">

{/* mapping project */}
{projects.map((projet) => (
    <Project
        key={projet.id}
        {...projet}/>
 ))} 

 {/* Button return to home  */}
 <div className="absolute bottom-0 right-0 animate-bounce cursor-pointer">
    <Link to="home" activeClass="active"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#FF9D8B" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
</svg>
</Link></div>

</div>
    </section>
   
   <footer className={theme==='light' ? 'w-screen flex justify-center p-0 h-20 ': 'w-screen flex justify-center p-0 h-20 bg-[#3E3D3D]'}  id='contact'>
   
        <div className='m-6'>
            <a href="https://github.com/Hysilie " target='_blank' className="mr-4 hover:underline md:mr-6" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={theme === 'light' ? '#FF9D8B': 'white'}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
        </div>
        <div className='m-6'>
            <a href="https://www.linkedin.com/in/marionlalonde/" className="mr-4 hover:underline md:mr-6 " target='_blank' rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={theme === 'light' ? '#FF9D8B': 'white'}><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
        </div>
        <div className='m-6'>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=lalondemarion.pro@gmail.com" className="mr-4 hover:underline md:mr-6"target='_blank' rel="noreferrer" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={theme === 'light' ? '#FF9D8B': 'white'}><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
            </a>
        </div>
   </footer>
    </>
  )
}
