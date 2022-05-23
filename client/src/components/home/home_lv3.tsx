import React from "react";
import Fade from 'react-reveal/Fade';

const Home_lv3 = () => {
    return (
        <div className="Home_lv3">
            <div>
                <Fade bottom>
                    <span>화면 번역</span>
                </Fade>
                <div>
                    <Fade bottom>
                        <span>이미지 다운로드 없이</span>
                    </Fade>
                    <Fade bottom>
                        <span>내 화면을 즉시 번역</span>
                    </Fade>
                </div>
                <div>
                    <div className="home_lv3_left">
                        <div>
                            <span>어플 하나로 모든 작품를 번역해보세요</span>
                            <span>화면 번역을 통해 번거로운 다운로드 없이 화면 그대로를</span>
                            <span>번역할 수 있습니다.</span>
                        </div>
                        <div>
                            <div>
                                <Fade bottom>
                                    <img src="./logo.png" alt="logo" />
                                </Fade>
                            </div>
                            <div>
                                <span><i className="xi-renew xi-3x"></i></span>
                            </div>
                            <div>
                                <Fade bottom>
                                    <span>만화</span>
                                </Fade>
                                <Fade bottom>
                                    <span>소설</span>
                                </Fade>
                                <Fade bottom>
                                    <span>커뮤니티</span>
                                </Fade>
                                <Fade bottom>
                                    <span>쇼핑몰</span>
                                </Fade>
                                <Fade bottom>
                                    <span>인터넷</span>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <Fade right >
                        <div className="home_lv3_right">
                            <img src="./iphone2.png" alt="book" />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Home_lv3;