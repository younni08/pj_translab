import React from "react";
import Home_lv1 from "./home_lv1";
import Home_lv2 from "./home_lv2";
import Home_lv3 from "./home_lv3";

const Home = () => {
    return (
        <div className="home">
            <div>
                <Home_lv1 />
                <Home_lv2 />
                <Home_lv3 />
            </div>
        </div>
    )
}

export default Home;