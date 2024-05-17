import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='ml-[2.9rem]'>
            <div>
                <nav className="h-20 flex flex-wrap space-x-80 mt-[1rem] mx-[1.5rem] mb-[2rem]">
                    <div className ="flex flex-wrap space-x-20">
                        <h1 className="text-[2rem] font-extrabold text-black hover:text-[#ff9b05] pt-[1rem]">David Smith's Profile</h1>
                        <div className="text-center p-[20px] font-bold text-[1.3rem] bg-black w-[20vw] h-[8vh] border-2 border-transparent rounded-[15px] text-white hover:text-[#ff9b05]">Computer Science</div>
                    </div>
            
                    <div className="flex space-x-20">
                        <button className = "bg-black h-[60px] w-[120px] text-white rounded-[15px] hover:text-[#ff9b05]">Edit Profile</button>
                        <button className = "bg-black h-[60px] w-[120px] text-white rounded-[15px] hover:text-[#ff9b05]"><NavLink to="/">Dashboard</NavLink></button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

