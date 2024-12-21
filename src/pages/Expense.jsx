import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { Card } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

const Expense = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateClick = (value) => {
    // YYYY-MM 형식으로 날짜 포맷
    const selectedMonth = `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}`;
    navigate(`/expense/${selectedMonth}`);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* 헤더 */}
      <Card className="shadow-sm mb-4 border-0 rounded-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <FaHome 
            onClick={goHome} 
            style={{ fontSize: '2rem', cursor: 'pointer', color: '#5A5A5A' }} 
          />
          <Card.Title className="text-center flex-grow-1" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5A5A5A' }}>
            Expense
          </Card.Title>
        </Card.Body>
      </Card>

      {/* 캘린더 */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">2025 년</h2>
        <Calendar
          onClickMonth={handleDateClick}
          value={date}
          view="year"
          minDate={new Date('2025-01-01')}
          maxDate={new Date('2025-12-31')}
          className="border rounded-md shadow-sm"
        />
      </div>
    </div>
  );
};

export default Expense;
