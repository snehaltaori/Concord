import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function PasswordChange(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <>
            <div className="section-container button button1" onClick={handleShow}>
                <h3 className="head">Password Change</h3>
                <p className="text-light">To change your current password</p>
            </div>

            <Offcanvas placement="top" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Change Password</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div id="password-form" className="container mt-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>                                
                                <input type="password" class="form-control" id="newPassword" required></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" required></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}