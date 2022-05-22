import React from "react";
import Home_lv1 from "./home_lv1";
import Home_lv2 from "./home_lv2";
import Home_lv3 from "./home_lv3";
import Home_lv4 from "./home_lv4";
import Home_lv5 from "./home_lv5";

const Home = () => {
    return (
        <div className="home">
            <div>
                <Home_lv1 />
                <Home_lv2 />
                <Home_lv3 />
                <Home_lv4 />
                <Home_lv5 />
            </div>
        </div>
    )
}

export default Home;