import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home";
import UserInfo from './pages/UserInfo';
import PartnerInfo from './pages/PartnerInfo';
import Chat from './pages/Chat';
import { useState } from 'react';

function App() {
  // logic
  const [userInfo, setUserInfo] = useState();
  const [partnerInfo, setPartnerInfo] = useState();

  const handleUserInfo = (data) => {
    setUserInfo(data);
  }

  const handlePartnerInfo = (data) => {
    setPartnerInfo(data);
  }

  // view
  return ( 
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-info" element={<UserInfo handleUserInfo={handleUserInfo} />} />
        <Route path="/partner-info" element={<PartnerInfo handlePartnerInfo={handlePartnerInfo}/>} />
        <Route path="/chat" element={<Chat userInfo={userInfo} partnerInfo={partnerInfo} />} />
      </Routes>
    </div>
  )
}

export default App;
