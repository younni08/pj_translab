import React from "react";

const ReviewArticle = () => {
    return (
        <div className="review_ele">
            <div className="review_ele_lv1">
                <span><i className="xi-star xi-x"></i></span>
                <span><i className="xi-star xi-x"></i></span>
                <span><i className="xi-star xi-x"></i></span>
                <span><i className="xi-star xi-x"></i></span>
                <span><i className="xi-star-o xi-x"></i></span>
            </div>
            <div className="review_ele_lv2">
                <span>4.5 out of 5 Stars</span>
            </div>
            <div className="review_ele_lv3">
                <span>Kim k.w</span>
            </div>
            <div className="review_ele_lv4">
                <span>2020/05/04</span>
            </div>
            <div className="review_ele_lv5">
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
            </div>
        </div>
    )
}

export default ReviewArticle;