import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MainCard = ({title, onClick}) => {
  // logic

  // view
  return (
    <Card style={{ 
      width: '8rem', 
      height: '8rem', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      margin: '0 auto',
      cursor: 'pointer' // 클릭 가능한 느낌을 주기 위해 추가
    }}
      onClick={onClick} // 클릭 이벤트 추가
    >
      <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        {title}
      </Card.Title>
    </Card>
  )
}

export default MainCard
