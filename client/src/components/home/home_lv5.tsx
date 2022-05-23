import React from "react";
import Fade from 'react-reveal/Fade';

const Home_lv5 = () => {
    return (
        <div className="Home_lv5">
            <div>
                <Fade bottom>
                    <span>이미지 편집</span>
                </Fade>
                <div>
                    <Fade bottom>
                        <span>이미지를 번역할때 불편한 부분은</span>
                    </Fade>
                    <Fade bottom>
                        <span>바로 바로 수정할 수 있습니다.</span>
                    </Fade>
                </div>
                <div>
                    <Fade bottom>
                        <div>
                            <img src="./edit.png" alt="iphone" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div>
                            <div>
                                <span>번역 결과, 글씨 사이즈 번역물 각도, 색상 등 다양한</span>
                                <span>항목을 수정할 수 있어요.</span>
                            </div>
                            <div>
                                <img src="./1.jpg" alt="comic" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Home_lv5;