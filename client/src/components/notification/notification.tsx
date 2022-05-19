import React from "react";
import NotificationArticle from "./notification_article";

const Notification = () => {
    return (
        <div className="noti">
            <div>
                <div className="noti_lv1">
                    <img src="./noti.jpg" alt="books" />
                    <div>
                        <span>Notification</span>
                        <span>Improvement from the TranslateLab</span>
                    </div>
                </div>
                <div className="noti_main">
                    <NotificationArticle />
                    <NotificationArticle />
                    <NotificationArticle />
                    <NotificationArticle />
                    <NotificationArticle />
                </div>
            </div>
        </div>
    )
}

export default Notification