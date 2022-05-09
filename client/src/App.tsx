import React from 'react';
import Topnavi from './components/common/topnavi';
import Home from './components/home/home';

function App() {
  return (
    <div className="root">
      <div>
        <Topnavi />
        <Home />
      </div>
    </div>
  );
}

export default App;
