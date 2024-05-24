import { handles } from "./handles";
import Cards from "./components/Cards";

export default function SocialMediaHandles(){
    return(
        <div className="container padding:20px" style={{backgroundColor: "#0c0c0e",color: "#ffffff"}}>
            <h2 className="head py-4">Social Media Handles</h2>
            <div className="row">
                {
                    handles.map((item,idx) => (
                        <div className="col-4">
                            <Cards key = {idx} {...item} ></Cards>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}