import React,  {useState, useEffect, useRef} from 'react'

function Project({projet_name, logo, url, repo, duration, tools, projet_type,  mobile_view  }) {
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = React.useState(false);


    let modalRef = useRef();

    useEffect(() => {
      /* close when wlick out of the div */
      let handler = (e) => {
        const { current } = modalRef;
        if (current && !current.contains(e.target)) {
          setShowModal(false);
        }
      };
      document.addEventListener("mousedown", handler, { capture: true });
      /* remove undefined contains */
      return () => {
        document.removeEventListener("mousedown", handler, { capture: true });
      }
    }, );
    
   
      

  return (
    /* Hover condition */
    <>
    <div  onMouseEnter={()=>{
        setHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
      }} className=" m-6 h-64 w-64 md:h-96 md:w-96 flex items-center justify-center bg-no-repeat bg-center bg-cover " style={{backgroundImage:`url(${logo})`}}>
        {hover ? <div
           className="h-64 w-64 md:h-96 md:w-96 hover:bg-[#686894]  transition duration-500 flex flex-col text-center items-center justify-content ">

<div className='m-8 space-y-3'>
       <h2 className='text-2xl text-[#eee]'>{projet_name}</h2><br></br>
       <hr></hr>
        <h3 className='text-xl text-[#eee] cursor-pointer' onClick={()=>setShowModal(!showModal)}>view details</h3>
        </div>
</div>
        :null}  
        </div>
        {/* Modal */}
               {showModal ? (
                 <>
                   <div
                     className=" text-[#333] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                   >
                     <div className="relative  h-100  w-100 my-6 mx-auto max-w-3xl bg-[#eee]" >
                       {/*content*/}
                       <div ref={modalRef} className=" border-0 h-screen w-full rounded-lg shadow-lg  flex flex-col outline-none focus:outline-none">
                         {/*header*/}
                         <div className="flex items-start   justify-between p-5  rounded-t">
                           <h3 className="text-4xl ml-2 md:ml-6">
                             {projet_name} <a rel="noreferrer" href={`${url}`} target="_blank">🔗</a>
                           </h3>
                           <button
                             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                             onClick={() => setShowModal(false)}
                           >
                             <span className="bg-transparent  text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                               × 
                             </span>
                           </button>
                         </div>
                         {/*body*/}
                         <div>
                         <div className="relative w-screen md:w-full grid grid-cols-1 md:grid-cols-2 md:justify-items-center  p-2 ">
                          <div>
                         <p className='my-6 '><span className="font-medium underline text-[#FF9D8B]">Project type :<br></br></span>{projet_type}</p>
                         <p className='my-6 '><span className="font-medium  underline text-[#FF9D8B]">Tools :<br></br></span>{tools}</p>
                         <p className='my-6 '><span className="font-medium  underline text-[#FF9D8B]">Repo :<br></br></span> <a rel="noreferrer" href={`${repo}`} target="_blank">github 🔗</a></p>
                         <p className='my-6 '><span className="font-medium  underline text-[#FF9D8B]">Duration :<br></br></span>{duration}</p>
                          </div>
                     
                          <div className=' hidden md:block md:h-64 md:w-64 flex items-center justify-center bg-no-repeat bg-center bg-cover ' style={{backgroundImage:`url(${logo})`}}></div>
                         </div>
                         <div className='relative flex flex-col justify-center w-full'>
                         <p className='m-2 md:mx-8 md:px-8 font-semibold  text-[#686894]'>overview</p> 
                           <img src={mobile_view} className=' m-2 grid grid-cols-1 w-2/3 md:mx-8 md:px-8' alt="mobile-view"/> 
                           </div>
                         </div>
                         {/*footer*/}
                         <div className="flex items-center justify-end p-6  rounded-b">
                        
                           <button
                             className="text-[#FF9D8B] font-medium"
                             type="button"
                             onClick={() => setShowModal(false)}
                           >
                             CLOSE
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                 </>
               ) : null}
           
        
        </>
  )
}

export default Project