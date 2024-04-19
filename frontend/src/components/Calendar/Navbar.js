import { useState } from "react";
import GetCurrentTime from "./utils/GetCurrentTime";
import DatePuller from "./utils/DatePuller";
import TimeDirector from "./utils/TimeDirector";
import DateDecorator from "./utils/DateDecorator";

const size = 0.75;

const timeStyle = {
  fontSize: `${size * 2}rem`,
  fontWeight: `500`,
  marginBottom: `${size * 0.7}rem`,
};
const fontThick = {
  fontSize: `${size * 1.4}rem`,
  fontWeight: `500`,
  marginTop: `${size * 0.1}rem`,
  marginBottom: `${size * 0.6}rem`,
};

export default function Navbar({setSearchTodo}) {
console.log("Rendering Navbar");
  
let currentTime = GetCurrentTime();
currentTime = TimeDirector(currentTime);
console.log(currentTime);

if(currentTime[0] === "0") currentTime = currentTime.slice(1);

let currentDate = DatePuller();
currentDate = DateDecorator(currentDate);
console.log(currentDate);

/* ------------------------------------------------------ */

  return (
    <header className="cal_header flex justify-center items-center justify-between shadow-[0_0_20px_#00000020] mb-16 px-20 py-0 rounded-[10px]">
      <div className="cal_time-and-date flex flex-col justify-center items-center whitespace-nowrap">
        <div className="time" style={timeStyle}>{currentTime}</div>
        <div className="date">{currentDate}</div>
      </div>
      <form
        className="cal_navbarSearch relative w-[30rem] rounded-[0.7rem] border-solid border-[1px] border-[#2cbe82] bg-green-500 m-8"
        onsubmit="event.preventDefault();"
        role="search"
      >
        <input
          className="searchTodo h-10 text-[#2f2f2f] text-[1.2rem] border-0 w-full rounded-[0.7rem] appearance-none transition-all duration-[0.3s] ease-[cubic-bezier(0, 0, 0.43, 1.49)] transition-width transition-border z-10 relative px-5 py-0 outline-none bg-white"
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
          onChange={(e) => setSearchTodo(e.target.value)}
          // onClick={handleSearchNavbar}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <div class="cal_profile whitespace-nowrap flex flex-col justify-center items-center m-4">
        {/* <img src="./img/r.jpg" width="60" height="60" alt=""></img> */}
        <img className="mb-2 rounded-[50%]" src="./img/r.jpg" width="60" height="60" alt=""></img>
        <p style={fontThick}>Hitarth Rajput</p>
      </div>
    </header>
  );
}
