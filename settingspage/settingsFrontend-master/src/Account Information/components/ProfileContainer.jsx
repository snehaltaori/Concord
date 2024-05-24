import animeproj from "../../../assests/animeproj.jpg"

export default function ProfileContainer(){

    return(
        <div className="col md-4 container-fluid">
            <div className="profile-container row">
                <div className="col">
                    <img src={animeproj} alt="Profile Picture" className="profile-pic"></img>
                </div>
                <div className="col">
                    <br></br>
                    <h4 className="text-dark">Chris</h4>
                    <p className="text-dark">Student ID: LCI2024001</p>
                </div>
                
            </div>
        </div>

    );
}