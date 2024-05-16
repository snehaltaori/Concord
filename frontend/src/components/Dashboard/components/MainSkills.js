import React from 'react';

const MainSkills = () => {
  return (
    <div className="main-skills font-poppins">
        <div className="card">
            <i className="fas fa-laptop-code" />
            <h3>Web development</h3>
            <p>Upcoming class</p>
            <button>Join</button>
        </div>
        <div className="card">
            <i className="fas fa-comment" />
            <h3>Mathematics L3</h3>
            <p>Previously Visited Forum</p>
            <button>Visit</button>
        </div>
        <div className="card">
            <i className="fas fa-sheet-plastic" />
            <h3>CTP Test 4A</h3>
            <p>View Analytics</p>
            <button>Visit</button>
        </div>
        <div className="card">
            <i className="fas fa-scroll" />
            <h3>Announcements</h3>
            <p>Get latest updates</p>
            <button>Visit</button>
        </div>
    </div>

  );
}

export default MainSkills;
