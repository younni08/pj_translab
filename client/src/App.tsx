import React from 'react';
import Topnavi from './components/common/topnavi';
import Home from './components/home/home';
import {Routes,Route,} from "react-router-dom";
import Login from './components/login/login';
import Notification from './components/notification/notification';
import Pricing from './components/pricing/pricing';
import Review from './components/review/review';
import ReviewWrite from './components/review/review_write';
import NotificationWrite from './components/notification/notification_write';
import Foot from './components/common/foot';

function App() {
  return (
    <div className="root">
      <div>
        <Topnavi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/noti" element={<Notification />} />
          <Route path="/notiwrite" element={<NotificationWrite />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/review" element={<Review />} />
          <Route path="/revieww" element={<ReviewWrite />} />
        </Routes>
        <Foot />
      </div>
    </div>
  );
}

export default App;
