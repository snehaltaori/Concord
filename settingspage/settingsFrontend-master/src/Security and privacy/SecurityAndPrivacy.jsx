import Accessibility from "./components/Accessibility";
import AdditionalOptions from "./components/AdditionalOptions";
import PasswordChange from "./components/PasswordChange";


export default function SecurityAndPrivacy(){
    return(
        <div className="p-4" style={{backgroundColor: "#0c0c0e",color: "#ffffff"}}>
            <h2 className="my-4 head">Security and Privacy</h2>
            <div className="container">
                <PasswordChange></PasswordChange>
                <Accessibility></Accessibility>
                <AdditionalOptions></AdditionalOptions>
            </div>
        </div>
    );
}