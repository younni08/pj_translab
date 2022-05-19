import React from "react";
import { Link } from "react-router-dom";

const ReviewSide = () => {
    return (
        <div className="review_sum">
            <div>

                <div className="review_sum_lv1">
                    <span>4.8</span>
                    <div>
                        <span>out of</span>
                        <span>5 Stars</span>
                    </div>
                </div>
                <div className="review_sum_lv2">
                    <span><i className="xi-star xi-2x"></i></span>
                    <span><i className="xi-star xi-2x"></i></span>
                    <span><i className="xi-star xi-2x"></i></span>
                    <span><i className="xi-star xi-2x"></i></span>
                    <span><i className="xi-star-o xi-2x"></i></span>
                </div>
                <div className="review_sum_lv3">
                    <span>Overall rating of</span>
                    <span>259</span>
                </div>
                <div className="review_sum_lv4">
                    <Link to="/revieww">Leave Us Feedback</Link>
                </div>
            </div>
            <div>
                <div className="review_sum_lv5">
                    <span><i className="xi-filter"></i></span>
                    <span>Filter Options</span>
                </div>
                <div className="review_sum_lv6">
                    <div>
                        <select>
                            <option>English</option>
                            <option>한국어</option>
                        </select>
                    </div>
                </div>
                <div className="review_sum_lv7">
                    {/* 5 스타 */}
                    <div>
                        <div>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                        </div>
                        <span>(0)</span>
                    </div>
                    {/* 4 스타 */}
                    <div>
                        <div>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star-o"></i></span>
                        </div>
                        <span>(0)</span>
                    </div>
                    {/* 3 스타 */}
                    <div>
                        <div>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star-o"></i></span>
                            <span><i className="xi-star-o"></i></span>
                        </div>
                        <span>(0)</span>
                    </div>
                    {/* 2 스타 */}
                    <div>
                        <div>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star-o"></i></span>
                            <span><i className="xi-star-o"></i></span>
                            <span><i className="xi-star-o"></i></span>
                        </div>
                        <span>(0)</span>
                    </div>
                    {/* 1 스타 */}
                    <div>
                        <div>
                            <span><i className="xi-star"></i></span>
                            <span><i className="xi-star-o"></i></span>
                            <span><i className="xi-star-o"></i></span>
                            <span><i className="xi-star-o"></i></span>
                            <span><i className="xi-star-o"></i></span>
                        </div>
                        <span>(0)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSide