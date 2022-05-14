import React from "react";
import { Link } from "react-router-dom";

const ReviewWrite = () => {
    return (
        <div className="review">
            <div>
                <div className="review_lv1">
                    <img src="./books2.jpg" alt="books" />
                    <div>
                        <span>API Review</span>
                        <span>From all around The World</span>
                    </div>
                </div>
                <div className="review_lv2">
                    <div className="review_sum">
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
                            <div className="temp">
                                <div>
                                    <span><i className="xi-star"></i></span>
                                    <span><i className="xi-star"></i></span>
                                    <span><i className="xi-star"></i></span>
                                    <span><i className="xi-star"></i></span>
                                    <span><i className="xi-star"></i></span>
                                </div>
                                <span>(0)</span>
                            </div>
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
                    <div className="review_write_wrapper">
                        <div className="review_write">
                            <div className="review_write_rate">
                                <span><i className="xi-star-o xi-2x"></i></span>
                                <span><i className="xi-star-o xi-2x"></i></span>
                                <span><i className="xi-star-o xi-2x"></i></span>
                                <span><i className="xi-star-o xi-2x"></i></span>
                                <span><i className="xi-star-o xi-2x"></i></span>
                            </div>
                            <div className="review_write_title">
                                <div>
                                    <span>제목</span>
                                    <input />
                                </div>
                                <div>
                                    <span>글쓴이</span>
                                    <input />
                                </div>
                            </div>
                            <div className="review_write_text">
                                <textarea />
                            </div>
                            <div className="review_write_submit">
                                <span>등록하기</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewWrite;