import React from "react";
import * as B from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./SecondaryHeader.css";

const SecondaryHeader = () => {
    return (
        <div className="App">
            <B.Navbar fixedTop>
                <B.Navbar.Brand>
                    <Link to="/login">Insta Trade</Link>
                </B.Navbar.Brand>
                <B.Nav pullRight>
                    
                </B.Nav>
            </B.Navbar>
        </div>
    );
}
export default SecondaryHeader;