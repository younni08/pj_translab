import React, { useState } from "react";
import ReviewSide from "./review_side";


const ReviewWrite = () => {
    const [title,setTitle] = useState("")
    const [Name,setName] = useState("")
    const [text,setText] = useState("")
    const [star,setStar] = useState(0)
    const [star1,setStar1] = useState(false)
    const [star2,setStar2] = useState(false)
    const [star3,setStar3] = useState(false)
    const [star4,setStar4] = useState(false)
    const [star5,setStar5] = useState(false)

    const handleStar = (e:any) => {
        const ele = e.currentTarget
        if(!ele) return 0
        // 별 갯수 return
        if(Number(ele.getAttribute("id").replace("write_star",""))===1){
            setStar1(true);setStar2(false);setStar3(false);setStar4(false);setStar5(false)
        }
        if(Number(ele.getAttribute("id").replace("write_star",""))===2){
            setStar1(true);setStar2(true);setStar3(false);setStar4(false);setStar5(false)
        }
        if(Number(ele.getAttribute("id").replace("write_star",""))===3){
            setStar1(true);setStar2(true);setStar3(true);setStar4(false);setStar5(false)
        }
        if(Number(ele.getAttribute("id").replace("write_star",""))===4){
            setStar1(true);setStar2(true);setStar3(true);setStar4(true);setStar5(false)
        }
        if(Number(ele.getAttribute("id").replace("write_star",""))===5){
            setStar1(true);setStar2(true);setStar3(true);setStar4(true);setStar5(true)
        }
        return setStar(Number(ele.getAttribute("id").replace("write_star","")))
    }

    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

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
                    <div className="review_write_wrapper">
                        <div className="review_write">
                            <div className="review_write_rate">
                                <span onClick={handleStar} id="write_star1">{star1?<i className="xi-star xi-2x"></i>:<i className="xi-star-o xi-2x"></i>}</span>
                                <span onClick={handleStar} id="write_star2">{star2?<i className="xi-star xi-2x"></i>:<i className="xi-star-o xi-2x"></i>}</span>
                                <span onClick={handleStar} id="write_star3">{star3?<i className="xi-star xi-2x"></i>:<i className="xi-star-o xi-2x"></i>}</span>
                                <span onClick={handleStar} id="write_star4">{star4?<i className="xi-star xi-2x"></i>:<i className="xi-star-o xi-2x"></i>}</span>
                                <span onClick={handleStar} id="write_star5">{star5?<i className="xi-star xi-2x"></i>:<i className="xi-star-o xi-2x"></i>}</span>
                            </div>
                            <div className="review_write_title">
                                <div>
                                    <label htmlFor="review_write_title">제목</label>
                                    <input id="review_write_title" onChange={handleTitle} />
                                </div>
                                <div>
                                    <label htmlFor="review_write_name">글쓴이</label>
                                    <input id="review_write_name" onChange={handleName} />
                                </div>
                            </div>
                            <div className="review_write_title">
                                <div>
                                    <label htmlFor="review_write_name">OCR</label>
                                    <select>
                                        <option>mlkit</option>
                                        <option>googlevision, </option>
                                        <option>clovaocr</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="review_write_name">번역 엔진</label>
                                    <select>
                                        <option>mlkit</option>
                                        <option>googletranslate</option>
                                        <option>papago</option>
                                    </select>
                                </div>
                            </div>
                            <div className="review_write_text">
                                <textarea onChange={handleText} />
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