import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import MainCard from '../components/MainCard';

const Home = () => {

  const history = useNavigate();

  // 카드 클릭 이벤트 핸들러
  const handleCardClick = (url) => {
    history(url);
  };


  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-pink-500 fixed -z-10 -left-60 -top-56"></i>
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 -z-10">
        <img src="./images/black-background.jpg" alt="" />
      </div>
      <div className="h-full flex flex-col">
        <Title mainTitle={'동현 App'} />
        <br />
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          rowGap: '2rem', 
          columnGap: '1rem', 
          justifyItems: 'center',
          alignItems: 'center'
        }}>
          <MainCard title={'To Do'} onClick={() => handleCardClick('/todo')} />
          <MainCard title={'Expense Details'} />
          <MainCard title={'Stock'} />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
