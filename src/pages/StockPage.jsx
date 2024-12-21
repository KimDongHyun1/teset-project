import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

// Chart.js 등록
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const StockPage = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: '테슬라', currentPrice: 400000, myStock: 500000 },
    { id: 2, name: '애플', currentPrice: 300000, myStock: 200000 },
    { id: 3, name: '구글', currentPrice: 250000, myStock: 100000 },
  ]);

  // 합계 계산
  const totalAmount = stocks.reduce((sum, stock) => sum + stock.myStock, 0);

  // 파이 차트 데이터
  const data = {
    labels: stocks.map(stock => stock.name),
    datasets: [
      {
        data: stocks.map(stock => stock.myStock),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF'], // 각 주식의 색상
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-center font-bold text-2xl mb-4">내 주식</h2>

      {/* 주식 테이블 */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>주식명</th>
            <th>현재가격</th>
            <th>내주식</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.currentPrice.toLocaleString()} 원</td>
              <td>{stock.myStock.toLocaleString()} 원</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 합계 */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <span className="font-bold text-lg">합계:</span>
        <span className="font-bold text-lg">{totalAmount.toLocaleString()} 원</span>
      </div>

      {/* 주식 비중 차트 */}
      <div className="mt-4">
        <h3 className="text-center">주식 비중</h3>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default StockPage;
