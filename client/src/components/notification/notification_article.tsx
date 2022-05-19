import React from "react";

const NotificationArticle = () => {
    return (
        <div className="noti_ele">
            <div>
                <img src="./noti.jpg" alt="noti" />
            </div>
            <div>2022 타이틀</div>
            <div>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
            <div>
                <div>
                    <img src="./logo.png" alt="logo" />
                </div>
                <div>
                    <span>TranslateLab</span>
                    <span>2022/05/02</span>
                </div>
            </div>
        </div>
    )
}

export default NotificationArticle;