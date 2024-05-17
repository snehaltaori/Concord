import React from 'react'
import Navbar from '../components/Dashboard/components/Navbar';
import MainTop from '../components/Dashboard/components/MainTop';
import MainSkills from '../components/Dashboard/components/MainSkills';
import MyCourses from '../components/Dashboard/components/MyCourses';
import Contests from '../components/Dashboard/components/Contests';
import '../components/Dashboard/Styles/Dashboard.css';

const Dashboard = () => {
    return (
    <div className="dash">
        <div className="container-dash flex ">
          <div className="Navbar">
          <Navbar />
          </div>
          <div className="main">
            <MainTop />
            <MainSkills />
            <MyCourses />
            <Contests />
          </div>
        </div>
    </div>
    );
}

export default Dashboard