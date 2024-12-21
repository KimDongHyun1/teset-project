import React, { useState } from 'react';
import { FaHome, FaTrashAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ExpenseDetail = () => {
  const { month } = useParams(); // URL 파라미터 가져오기
  const navigate = useNavigate();

  const [incomes, setIncomes] = useState([
    { id: 1, source: '부업', amount: 1000000 },
    { id: 2, source: '월급', amount: 4000000 },
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

  return (
    <div className="p-4 bg-white shadow-md rounded-md" style={{ paddingBottom: '100px' }}>
      {/* 상단 섹션 */}
      <div className="relative border-b pb-2 mb-4">
        <FaHome
          onClick={() => navigate('/')}
          className="absolute left-0 text-blue-500 cursor-pointer"
          style={{ fontSize: '1.8rem', top: '50%', transform: 'translateY(-50%)' }}
        />
        <h1 className="text-2xl font-bold text-center">Expense Detail</h1>
        <p className="text-center text-gray-600">선택된 월: {month}</p>
      </div>

      {/* 입력 폼 */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="수입 출처"
          value={newSource}
          onChange={(e) => setNewSource(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="금액"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          className="w-1/2 p-2 border rounded-md"
        />
        <Button onClick={addIncome} variant="primary" className="w-1/4">
          추가
        </Button>
      </div>

      {/* 수입 목록 테이블 */}
      <div className="overflow-x-auto mb-4" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>수입 출처</th>
              <th className="text-right">금액</th>
              <th className="text-center">삭제</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map((income) => (
              <tr key={income.id}>
                <td>{income.source}</td>
                <td className="text-right">{income.amount.toLocaleString()} 원</td>
                <td className="text-center">
                  <FaTrashAlt
                    onClick={() => deleteIncome(income.id)}
                    className="text-red-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* 합계 고정 (sticky 사용) */}
      <div
        className="sticky bottom-0 left-0 right-0 bg-white border-t shadow-md d-flex justify-content-between align-items-center p-3"
        style={{ zIndex: 1000 }}
      >
        <div className="font-bold text-lg">합계:</div>
        <div className="font-bold text-xl">{totalAmount.toLocaleString()} 원</div>
      </div>
    </div>
  );
};

export default ExpenseDetail;
