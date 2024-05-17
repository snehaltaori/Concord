import React from "react";
import '../components/Profile/Style/Profile.css';
import Navbar from "../components/Profile/profile-comp/Navbar";
import Info from "../components/Profile/profile-comp/Info";
import Projects from "../components/Profile/profile-comp/Projects";
import Social from "../components/Profile/profile-comp/Social";
import Certify from "../components/Profile/profile-comp/Certify";
import Progress from "../components/Profile/profile-comp/Progress";
import Skills from "../components/Profile/profile-comp/Skills";
import Achievements from "../components/Profile/profile-comp/Achievements";

function Profile() {
  return (
    <div className="Profile">
      <div className="App">
        <div><Navbar/></div>
        <div className="flex flex-wrap">
            <div className="flex flex-wrap flex-col">

              <div className="flex flex-wrap relative">
                <div><Info/></div>
                <div><Projects/></div>
              </div>
              <div className="flex flex-wrap mb-[3rem] p-[1rem] space-x-8">
                  <Progress startValue={0} endValue={90} footer={"Course Progress"} />
                  <Progress startValue={0} endValue={60} footer={"Project 1 Progress"}/>
                  <Progress startValue={0} endValue={70} footer={"Project 2 Progress"}/>
              </div>
              <div className="flex flex-wrap relative">
                <div><Skills/></div>
                <div><Achievements/></div>
              </div>

            </div>
            <div className="relative flex flex-wrap flex-col">
              <div><Social/></div>
              <div><Certify/></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
