import React from "react";

const Home_lv3 = () => {
    return (
        <div className="Home_lv3">
            <div>
                <span>화면 번역</span>
                <div>
                    <span>이미지 다운로드 없이</span>
                    <span>내 화면을 즉시 번역</span>
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
                                <img src="./logo.png" alt="logo" />
                            </div>
                            <div>
                                <span><i className="xi-renew xi-3x"></i></span>
                            </div>
                            <div>
                                <span>만화</span>
                                <span>소설</span>
                                <span>커뮤니티</span>
                                <span>쇼핑몰</span>
                                <span>인터넷</span>
                            </div>
                        </div>
                    </div>
                    <div className="home_lv3_right">
                        <img src="./iphone2.png" alt="book" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_lv3;