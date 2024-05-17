import React from 'react'
import {NavLink} from 'react-router-dom';
import img from '../assets/pro.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Social = () => {

    function clickHandler() {
        alert("Redirecting to an external website!");
    }

  return (
    <div className ="w-[24rem] h-[75vh] right-0 ml-[7rem] text-center bg-black rounded-[15px] p-5 flex flex-wrap justify-center items-center flex-col text-white space-y-10">
        <div className="relative flex flex-wrap flex-col justify-center space-y-4">
            <div className="relative -top-[4rem] text-xl font-bold">
            <h4>David Smith</h4>
            </div>
            <div className="relative w-[120px] h-[120px] rounded-full left-[7rem] -top-[40px]">
            <img src={img}/>
            </div>
            <div>
            <p>Freshman at Indian Institute of Information Technology
                <br />
                <br/>
            <b>Lucknow</b>
            </p>
            </div>
        </div>

        <div>
            <div>
                <div className="w-[350px] flex mt-[1rem] space-x-10 px-[3.3rem] rounded-full h-3 pt-1 text-3xl">
                    <NavLink className="hover:text-[2rem] transition duration-300 ease-in-out" to="https://www.facebook.com/" onClick={clickHandler}><FaFacebook/></NavLink>
                    <NavLink  className="hover:text-[2rem] transition duration-300 ease-in-out" to="https://www.instagram.com/" onClick={clickHandler}><AiFillInstagram /></NavLink>
                    <NavLink  className="hover:text-[2rem] transition duration-300 ease-in-out" to="https://www.youtube.com/" onClick={clickHandler}><FaYoutube/></NavLink>
                    <NavLink  className="hover:text-[2rem] transition duration-300 ease-in-out"y to="https://www.github.com/" onClick={clickHandler}><FaSquareGithub/></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Social