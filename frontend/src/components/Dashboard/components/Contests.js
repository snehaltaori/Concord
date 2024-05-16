import React from 'react';

const Contests = () => {
  return (
    <section className="main-course font-poppins">
      <h1>Contests</h1>
      <div className="course-box">
        <ul>
          <li className="active">Ongoing</li>
          <li>Upcoming</li>
          <li>Finished</li>
        </ul>
        <div className="course">
          <div className="box">
            <h3>Freshers Cup</h3>
            <p>11AM onwards</p>
            <button>enter</button>
            <i className="fa-solid fa-trophy" />
          </div>
          <div className="box">
            <h3>Gaming Night</h3>
            <p>10PM Onwards</p>
            <button>enter</button>
            <i className="fa-solid fa-gamepad" />
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contests;
