import React from "react";
import { Link } from "react-router-dom";

const Topnavi = () => {
    return(
        <div className="topnavi">
            <div>
                <div className="topnavi_left">
                    <Link to="/">
                        <img src="./logo.png" alt="logo" />
                        <span>TranslateLab</span>
                    </Link>
                    <div>
                        <Link to="/review">API Review</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/noti">Notification</Link>
                    </div>
                </div>
                <div className="topnavi_right">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Topnavi;