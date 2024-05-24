import { NavLink } from "react-router-dom";
import animeproj from "../assests/animeproj.jpg"



export default function NavBar() {
    return (
        <>
            <nav id="navbar-example2" className="navbar bg-dark px-3 mb-3">
                <a className="navbar-brand" href="/" style={{color: "#f6f2f2"}}><h2>Settings</h2></a>
                        <NavLink className="topnav-right" to="/">
                        <span className="ml-2" style={{color: "rgb(239, 237, 235)"}}>
                        <img src={animeproj} className="rounded-circle " style={{width: "50px",height: "50px"}}></img>
                            Chris_2401</span>
                        </NavLink>
            </nav>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/">Account Information</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/settings/Notifications">Notifications</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/settings/SecurityAndPrivacy">Security and Privacy</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink className="nav-link" to="/settings/SocialMediaHandles">Social Media Handles</NavLink>
                </li>
            </ul>
        </>
    );
}