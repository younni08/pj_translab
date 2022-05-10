import React from 'react';
import Topnavi from './components/common/topnavi';
import Home from './components/home/home';
import {Routes,Route,} from "react-router-dom";
import Login from './components/login/login';

function App() {
  return (
    <div className="root">
      <div>
        <Topnavi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
