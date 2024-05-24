import Fees from "./components/Fees";
import Grades from "./components/Grades";
import PersonalInformation from "./components/PersonalInformation";
import ProfileContainer from "./components/ProfileContainer";
import PublicInformation from "./components/PublicInformation";
import Skills from "./components/Skills";


export default function AccountInformation(){

    return(
            <div className="p-4 container-fluid row" style={{backgroundColor: "#0c0c0e",color: "#ffffff"}}>
                <h2 className="my-4 head">Account Information</h2>
                <div className="col-sm-4 mt-6 mx-auto">
                    <ProfileContainer></ProfileContainer>
                </div>
                <div className="col-sm-8 mx-auto">
                    <PersonalInformation></PersonalInformation>
                    <PublicInformation></PublicInformation>
                    <Skills></Skills>
                    <Fees></Fees>
                    <Grades></Grades>
                </div>
            </div>
    );
}