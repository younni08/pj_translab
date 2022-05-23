import React from "react";
import Fade from 'react-reveal/Fade';

const Home_lv4 = () => {
    return (
        <div className="Home_lv4">
            <div>
                <Fade bottom>
                    <span>이미지 번역</span>
                </Fade>
                <div>
                    <Fade bottom>
                        <span>가지고 있는 이미지를</span>
                    </Fade>
                    <Fade bottom>
                        <span>손쉽게 한번에 번역하세요</span>
                    </Fade>
                </div>
                <Fade bottom>
                    <div>
                        <div>
                            <img src="./imagelist.jpg" alt="iphone" />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home_lv4;