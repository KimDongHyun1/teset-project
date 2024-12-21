import React, { useState } from 'react';
import { FaCalendarAlt, FaTrashAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Button, ListGroup } from 'react-bootstrap';

const ExpenseDetail = () => {
  const { month } = useParams(); // URL 파라미터 가져오기
  const navigate = useNavigate();

  const [incomes, setIncomes] = useState([
    { id: 1, source: 'ㄷㅇ', amount: 100000 },
    { id: 2, source: 'ㅌㅎ', amount: 300000 },
    { id: 3, source: 'ㅈㅎ', amount: 400000 },
    { id: 4, source: 'ㅅㅎ', amount: 400000 },
    { id: 5, source: 'ㅍㅅ', amount: 500000 },
    { id: 6, source: 'ㅈㅇ', amount: 160000 },
    { id: 7, source: 'ㅊㅇ', amount: 240000 },
    { id: 8, source: 'ㅁㅈ', amount: 200000 },
  ]);

  const [newSource, setNewSource] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const addIncome = () => {
    if (newSource.trim() && newAmount.trim() && !isNaN(newAmount)) {
      setIncomes([...incomes, { id: Date.now(), source: newSource, amount: Number(newAmount) }]);
      setNewSource('');
      setNewAmount('');
    }
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter(income => income.id !== id));
  };

  const totalAmount = incomes.reduce((sum, income) => sum + income.amount, 0);

  const goExpense = () => {
    navigate('/expense'); // expense로 이동
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* 상단 섹션 */}
      <div className="relative border-b pb-2 mb-4">
        <FaCalendarAlt 
          onClick={goExpense} 
          className="absolute left-0 text-blue-500 cursor-pointer"
          style={{ fontSize: '1.8rem', top: '50%', transform: 'translateY(-50%)' }}
        />
        <h1 className="text-2xl font-bold text-center">{month}</h1>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="수입 출처"
          value={newSource}
          onChange={(e) => setNewSource(e.target.value)}
          className="w-1/3 p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="금액"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          className="w-1/3 p-2 border rounded-md"
        />
        <button 
          onClick={addIncome}
          className="bg-navy text-white px-4 py-2 rounded-md shadow-md w-1/3"
          style={{
            background: '#003366', // 남색 배경색
            borderColor: 'transparent',
          }}
        >
          추가
        </button>
      </div>

      {/* 수입 목록 */}
      <div className="income-list" style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '50px' }}>
        <ListGroup>
          {incomes.map((income) => (
            <ListGroup.Item 
              key={income.id}
              className="d-flex justify-content-between align-items-center py-3"
              style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}
            >
              <div className="d-flex align-items-center" style={{ width: '180px', flex: '0 0 auto' }}>
                <span>{income.source}</span>
              </div>
              
              <div className="d-flex justify-content-end align-items-center" style={{ width: '120px', flex: '0 0 auto' }}>
                <span>{income.amount.toLocaleString()}</span>
                <span className="ms-1">원</span>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => deleteIncome(income.id)} 
                  className="shadow-sm ms-2"
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#003366',
                    borderColor: 'transparent',
                    flex: '0 0 auto', // 버튼 고정
                  }}
                >
                  <FaTrashAlt style={{ color: 'white' }} />
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      {/* 합계 고정 */}
      <div className="fixed-bottom bg-white p-4" style={{ position: 'fixed', bottom: '0', width: '100%', boxShadow: '0 -2px 10px rgba(0,0,0,0.1)' }}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="font-bold text-lg">합계:</span>
          <span className="font-bold text-lg">{totalAmount.toLocaleString()} 원</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetail;
