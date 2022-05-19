import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewArticle from "./review_article";
import ReviewSide from "./review_side";

const Review = () => {
    const [slide,setSlide] = useState(0)

    const handleSlide = (max:number) => {
        if(slide<0) return setSlide(0)
        if(slide>max) return setSlide(0)
        const ele = document.getElementById("review_list")
        if(!ele) return 0
        let distance = slide*226
        ele.style.transform = "translateX(-"+distance.toString()+"px)"
    }

    const slideLeft = () => {
        setSlide(c => c - 1)
    }

    const slideRight = () => {
        setSlide(c => c + 1)
    }

    useEffect(()=>{
        handleSlide(100)
    },[slide])

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
                    <ReviewSide />
                    <div className="review_list">
                        <span onClick={slideLeft}><i className="xi-long-arrow-left"></i></span>
                        <div>
                            <div id="review_list">
                                <ReviewArticle />
                                <ReviewArticle />
                                <ReviewArticle />
                                <ReviewArticle />
                                <ReviewArticle />
                                <ReviewArticle />
                                <ReviewArticle />
                            </div>
                        </div>
                        <span onClick={slideRight}><i className="xi-long-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;