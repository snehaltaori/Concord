import React from 'react';
import c from '../assets/C++.webp';
import python from '../assets/python.webp';
import html from '../assets/HTML.webp';
import css from '../assets/CSS.webp';
import sql from '../assets/SQL.webp';


const Skills = () => {
  return (
    <div>
        <h3 className="ml-[5.5rem] font-bold text-xl">Professional Skills</h3>
        <div className="ml-[5rem] mt-[20px] bg-[rgb(243,242,242)] rounded-[7px] p-3 text-center 
                h-[40vh] w-[26vw] shadow-lg hover:bg-black hover:text-white transition duration-500 ease-in-out">
            <div className="mt-[1.8rem] ml-3 flex space-x-20">
                <ul className="list-none space-y-4">
                    <li className="flex flex-wrap"><div><img className="w-[35px] h-[35px] rounded-full" src={c} alt=""/> </div>
                        <div><span className="hover:text-[#ff9b05] transition duration-500 ease-in-out font-bold pl-[1rem] text-[1rem]">C++</span></div></li> <br/>
                    <li className="flex flex-wrap"><div><img className="w-[35px] h-[35px] rounded-full" src={python} alt=""/> </div>
                        <div><span className="hover:text-[#ff9b05] transition duration-500 ease-in-out font-bold pl-[1rem] text-[1rem]">Python</span></div></li> <br/>
                    <li className="flex flex-wrap"><div><img className="w-[35px] h-[35px] rounded-full" src={html} alt=""/> </div>
                        <div><span className="hover:text-[#ff9b05] transition duration-500 ease-in-out font-bold pl-[1rem] text-[1rem]">HTML</span></div></li> <br/>
                </ul>
                <ul className="list-none space-y-4">
                    <li className="flex flex-wrap"><div><img className="w-[35px] h-[35px] rounded-full" src={css} alt=""/> </div>
                        <div><span className="hover:text-[#ff9b05] transition duration-500 ease-in-out font-bold pl-[1rem] text-[1rem]">CSS</span></div></li> <br/>
                    <li className="flex flex-wrap"><div><img className="w-[35px] h-[35px] rounded-full" src={sql} alt=""/> </div>
                        <div><span className="hover:text-[#ff9b05] transition duration-500 ease-in-out font-bold pl-[1rem] text-[1rem]">SQL</span></div></li> <br/>
                    <br/>   
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills