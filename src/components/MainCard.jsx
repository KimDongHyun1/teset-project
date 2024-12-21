import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaAngleRight } from 'react-icons/fa';  // 아이콘 추가

const MainCard = ({ title, onClick }) => {
  return (
    <Card
      onClick={onClick}
      style={{
        width: '100%',
        height: '200px',
        cursor: 'pointer',
        backgroundColor: '#1a1a1a',
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
      }}
      className="d-flex justify-content-center align-items-center text-center"
    >
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ flexDirection: 'column' }}
      >
        <Card.Title
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '10px',
          }}
        >
          {title}
        </Card.Title>
        <FaAngleRight style={{ fontSize: '1.5rem', color: '#fff' }} />
      </div>
    </Card>
  );
};

export default MainCard;
