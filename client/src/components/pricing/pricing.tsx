import React from "react";

const Pricing = () => {
    return (
        <div className="pricing">
            <div>
                <div className="review_lv1">
                    <img src="./ticket.jpg" alt="books" />
                    <div>
                        <span>요금 정보</span>
                        <span>알맞은 요금을 선택해주세요</span>
                    </div>
                </div>
                {/* <div className="pricing_lv1">
                    <span>요금 정보</span>
                    <span>알맞은 요금을 선택해주세요.</span>
                </div> */}
                <div className="pricing_list">
                    <div>
                        <span>Basic Plan</span>
                        <div>
                            <span>5,000원</span>
                        </div>
                        <div className="point">
                            <span>5,000 Points 지급</span>
                            <span>20,000자 번역 가능</span>
                            <span>833장의 이미지 번역 가능</span>
                        </div>
                    </div>
                    <div>
                        <span>Standard Plan</span>
                        <div>
                            <span>10,000원</span>
                        </div>
                        <div className="point">
                            <span>5,000 Points 지급</span>
                            <span>40,000자 번역 가능</span>
                            <span>1666장의 이미지 번역 가능</span>
                        </div>
                    </div>
                    <div>
                        <span>Monthly Plan</span>
                        <div>
                            <span>3,000원</span>
                        </div>
                        <div className="point">
                            <span>추가 과금 없이 무제한 이용</span>
                        </div>
                    </div>
                    <div>
                        <span>Yearly Plan</span>
                        <div>
                            <span>30,000원</span>
                        </div>
                        <div className="point">
                            <span>추가 과금 없이 무제한 이용</span>
                            <span>-20% 할인</span>
                        </div>
                    </div>
                </div>
                <div className="pricing_info">
                    <span>- 1포인트를 사용하여 40자를 번역할 수 있습니다</span>
                    <span>- 6포인트를 사용하여 1장의 이미지를 번역할 수 있습니다</span>
                </div>
            </div>
        </div>
    )
}

export default Pricing