import React from 'react'
import { Link } from 'react-router-dom'
import { RxHome } from 'react-icons/rx'


const Sidebar = ({ status }) => {
  return (
    <div id="sideBar" className={`${status && "max-lg:hidden"} relative top-0 flex flex-col flex-wrap border-r border-gray-300 p-6 lg:w-[18%] h-[100%] animated faster overflow-y-scroll overflow-x-hidden
    max-lg:fixed max-lg:top-[74px] max-lg:pb-[74px] w-[250px] left-0 z-20 bg-white
    `}>

      <div className="flex flex-col">

        <Link to="/" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <RxHome size={20} className={"mr-3 hover:text-inherit"} />
          User
        </Link>

        {/* <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Audio Files</p>

        <Link to="/all-audio" className="mb-3 capitalize text-black text-base font-medium font-sans hover:text-teal-600 transition ease-in-out duration-500 flex flex-row items-center">
          <AiOutlineAudio size={20} className={"mr-3 hover:text-inherit"} />
          All audio files
        </Link> */}


      </div>
    </div>
  )
}

export default Sidebar