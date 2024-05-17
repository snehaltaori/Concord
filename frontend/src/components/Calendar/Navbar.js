import { useEffect, useState } from "react";
import GetCurrentTime from "./utils/GetCurrentTime";
import DatePuller from "./utils/DatePuller";
import TimeDirector from "./utils/TimeDirector";
import DateDecorator from "./utils/DateDecorator";
import { useAuth } from "../../security/AuthContext";

const size = 0.75;

const timeStyle = {
  // fontSize: `${size * 2}rem`,
  // fontWeight: `500`,
  // marginBottom: `${size * 0.7}rem`,
};
const fontThick = {
  // fontSize: `${size * 1.4}rem`,
  // fontWeight: `500`,
  // marginTop: `${size * 0.1}rem`,
  // marginBottom: `${size * 0.6}rem`,
};

export default function Navbar({ setSearchTodo }) {
  console.log("Rendering Navbar");

  let currentTime = GetCurrentTime();
  currentTime = TimeDirector(currentTime);
  console.log(currentTime);

  if (currentTime[0] === "0") currentTime = currentTime.slice(1);

  let currentDate = DatePuller();
  currentDate = DateDecorator(currentDate);
  console.log(currentDate);

  const authContext = useAuth();
  
  /* ------------------------------------------------------ */

  return (
    <header className="cal_header flex items-center justify-between shadow-[0_0_20px_#00000020] mb-8 px-16 py-0 rounded-[10px]">
      <div className="cal_time-and-date flex flex-col justify-center items-center whitespace-nowrap">
        <div className="time text-lg font-medium" style={timeStyle}>
          {currentTime}
        </div>
        <div className="date">{currentDate}</div>
      </div>
      <form
        className="cal_navbarSearch relative w-[20rem] rounded-lg border-solid border-[1px] border-[#2cbe82] bg-green-500 m-8"
        onSubmit={(e) => e.preventDefault()}
        role="search"
      >
        <input
          className="searchTodo h-8 text-[#2f2f2f] border-0 w-full rounded-lg appearance-none transition-all duration-[0.3s] ease-[cubic-bezier(0, 0, 0.43, 1.49)] transition-width transition-border z-10 relative px-4 py-0 outline-none bg-white text-sm"
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
          onChange={(e) => setSearchTodo(e.target.value)}
          // onClick={handleSearchNavbar}
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <div className="cal_profile whitespace-nowrap flex flex-col justify-center items-center m-3">
        {/* <img src="./img/r.jpg" width="60" height="60" alt=""></img> */}
        {authContext.isAuthenticated ? (
          <img
            className="mb-1 rounded-[50%]"
            src="https://i.pinimg.com/736x/4e/38/3e/4e383efd275152cb5c5d03b1659b7e70.jpg"
            width="60"
            height="60"
            alt=""
          ></img>
        ) : (
          ""
        )}

        <p className="text-xs font-medium " style={fontThick}>
          {authContext.name}
        </p>
      </div>
    </header>
  );
}
