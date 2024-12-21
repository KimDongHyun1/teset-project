import React from 'react';
import Title from '../components/Title';
import { useNavigate } from 'react-router-dom';
import MainCard from '../components/MainCard';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const history = useNavigate();

  // 카드 클릭 이벤트 핸들러
  const handleCardClick = (url) => {
    history(url);
  };

  return (
    // <div className="w-full h-full bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
    <div className="w-full h-screen bg-gray-900 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
      {/* 배경 이미지 */}
      <div
        className="fixed left-0 top-1/2 transform -translate-y-1/2 -z-10"
        style={{ width: '100%', height: '100%' }}
      >
        <img
          src="./images/black-background.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(50%)', // 배경 이미지 어두운 필터 적용
          }}
        />
      </div>

      {/* 컨텐츠 */}
      <Container className="text-center py-5 relative z-10">
        <Title mainTitle="동현 App" />

        {/* 카드 레이아웃 */}
        <Row className="mt-5">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MainCard title="To Do" onClick={() => handleCardClick('/todo')} />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MainCard title="Expense" onClick={() => handleCardClick('/expense')} />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MainCard title="Stock" onClick={() => handleCardClick('/stockPage')} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;