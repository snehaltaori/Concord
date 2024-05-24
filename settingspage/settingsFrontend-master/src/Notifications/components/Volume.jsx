

export default function Volume(){
    return(
        <div className="section-container">
              <h3 className="head">Volume</h3>
              <input type="range" className="form-range" id="volumeControl" size={5} ></input>
        
              <h3>Do Not Disturb</h3>
              
              <div className="form-check form-switch position:right">
                <input className="form-check-input" type="checkbox" id="dndSwitch"></input>
                <label className="form-check-label" htmlFor="dndSwitch"></label>
              </div>
        </div>
    );
}