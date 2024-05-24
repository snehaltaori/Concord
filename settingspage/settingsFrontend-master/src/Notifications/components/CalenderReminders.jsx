

export default function CalenderReminders(){

    return(
        <div className="section-container">
            <h3 className="head">Calendar Reminders</h3>
            
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="meetingSwitch"></input>
                <label className="form-check-label" htmlFor="meetingSwitch">Meetings</label>
            </div>
            
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="meetingSwitch"></input>
                <label className="form-check-label" htmlFor="meetingSwitch">Deadlines</label>
            </div>
            
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="meetingSwitch"></input>
                <label className="form-check-label" htmlFor="meetingSwitch">Exams/Quizes/lab practicals</label>
            </div>
            
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="meetingSwitch"></input>
                <label className="form-check-label" htmlFor="meetingSwitch">Club activities and events</label>
            </div>
            
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="meetingSwitch"></input>
                <label className="form-check-label" htmlFor="meetingSwitch">Tournaments/Hackathons</label>
            </div>
        </div>

    );
}