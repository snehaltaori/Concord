
export default function Cards(props){
    return(
        <div className="card border-light mb-3 bg-dark">
            <div className="card-body text-light">
                <div className="d-flex flex-row">
                    <div>
                        <img src={props.imgsrc} className="imghandles rounded-circle" alt="Profile Picture"></img>
                    </div>
                    <div className="ms-5" >
                        <h5>{props.title}</h5>
                        <p>Username : {props.username}</p>
                    </div>
                </div>
                
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-outline-secondary " disabled>Connected</button>
            </div>
        </div>

    );
}