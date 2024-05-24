import AccountInformation from "./Account Information/AccountInformation"
import Notifications from "./Notifications/Notifications"
import SecurityAndPrivacy from "./Security and privacy/SecurityAndPrivacy"
import SocialMediaHandles from "./Social Media Handles/SocialMediaHandles"
import {BrowserRouter ,Route , Routes} from "react-router-dom"
import NavBar from "./NavBar"

function App() {

    return (
        <>
        
            <BrowserRouter>
            <NavBar></NavBar>
                <Routes>
                
                    <Route path="/" element={ <AccountInformation/>}/>
                    <Route path="/settings/Notifications" element={ <Notifications/>}/>
                    <Route path="/settings/SecurityAndPrivacy" element={ <SecurityAndPrivacy/>}/>
                    <Route path="/settings/SocialMediaHandles" element={ <SocialMediaHandles/>}/>
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default App
