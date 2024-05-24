import { useEffect, useState } from "react";
import CalenderReminders from "./components/CalenderReminders";
import Volume from "./components/Volume";
import axios from "axios";


export default function Notifications(){

    const [info,setInfo] = useState({});


    useEffect (() =>{
        loadNotifications();
    },[]);

    const loadNotifications= async() =>{
        const result = await axios.get('http://localhost:8080/notifications/1');
        setInfo(result.data);
    }

    const updateNotifications= async(requestBody) =>{
        const result = await axios.patch('http://localhost:8080/notifications/1',requestBody );
        setInfo(result.data);
    }

    const handleChange = (event) =>{
        let name = event.target.name;
        let checked = event.target.checked;
        const requestBody = {
            [name]: checked
          };

        updateNotifications(requestBody);
     }

    return(
        <div className="p-4" style={{backgroundColor: "#0c0c0e",color: "#ffffff"}}>
            <h2 className="my-4 head">Notifications</h2>
            <div className="container ">
                <div className="section-container">
                    <h3 className="head">Calendar Reminders</h3>
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name="meetings" checked={info.meetings} onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="meetings">Meetings</label>
                    </div>
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name="deadlines" checked={info.deadlines} onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="deadlines">Deadlines</label>
                    </div>
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name="exams" checked={info.exams} onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="exams">Exams/Quizes/lab practicals</label>
                    </div>
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name="clubActivities" checked={info.clubActivities} onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="clubActivities">Club activities and events</label>
                    </div>
                    
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name="tournaments" checked={info.tournaments} onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="tournaments">Tournaments/Hackathons</label>
                    </div>
                </div>

                <div className="section-container">
                    <h3 className="head">Volume</h3>
                    <input type="range" className="form-range" id="volumeControl" size={5} ></input>
                
                    <h3>Do Not Disturb</h3>
                    
                    <div className="form-check form-switch position:right">
                        <input className="form-check-input" type="checkbox" name="doNotDisturb" checked={info.doNotDisturb} onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="doNotSwitch"></label>
                    </div>
                </div>
            </div>
        </div>
    );

}