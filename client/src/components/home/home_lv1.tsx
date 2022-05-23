import React from "react";
import Fade from 'react-reveal/Fade';

const Home_lv1 = () => {
    return (
        <div className="home_lv1">
            <Fade bottom>
                <div>
                    <span>어려운 번역 작업,</span>
                    <div>
                        <span className="pc">TranslateLab</span>
                        <span className="pc">에서 간편하게</span>
                        <span className="mobile">TranslateLab</span>
                        <span className="mobile">에서</span>
                        <span className="mobile">간편하게</span>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div>
                    <div>
                        <img src="./App+Store.png" alt="app store" />
                    </div>
                    <div>
                        <img src="./Play+Store.png" alt="play store" />
                    </div>
                </div>
            </Fade>
            <div>
                <div>
                    <img src="./image/sample4.png" alt="book" />
                </div>
                <div>
                    <img src="./image/sample5.png" alt="book" />
                </div>
            </div>
        </div>
    )
}

export default Home_lv1;