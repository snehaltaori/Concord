import React from 'react';

const MyCourses = () => {
  return (
    <section className="main-course font-poppins">
        <h1>My courses</h1>
        <div className="course-box">
        <ul>
            <li className="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
        </ul>
        <div className="course">
            <div className="box">
            <h3>System Programming</h3>
            <p>80% - progress</p>
            <button>continue</button>
            <i className="fab fa-linux" />
            </div>
            <div className="box">
            <h3>Web Development</h3>
            <p>50% - progress</p>
            <button>continue</button>
            <i className="fab fa-css3-alt css" />
            </div>
            <div className="box">
            <h3>Computational Thinking</h3>
            <p>30% - progress</p>
            <button>continue</button>
            <i className="fab fa-c" />
            </div>
        </div>
        </div>
    </section>
  
  );
}

export default MyCourses;
