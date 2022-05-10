import React from "react";
import { Link } from "react-router-dom";

const Topnavi = () => {
    return(
        <div className="topnavi">
            <div>
                <div className="topnavi_left">
                    <Link to="/">TranslateLab</Link>
                    <div>
                        <span>Service</span>
                        <span>API Review</span>
                        <span>Pricing</span>
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