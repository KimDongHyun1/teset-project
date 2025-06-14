import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Form, ListGroup, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaTrashAlt, FaHome } from 'react-icons/fa'; // FaHome 아이콘 추가
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import axios from 'axios';
const endPoint = process.env.REACT_APP_SERVER_ADDRESS;

const ToDo = () => {
  const history = useNavigate(); // useNavigate 훅 추가

  // 할 일 목록
  const [tasks, setTasks] = useState([]);  

  // 입력값
  const [taskInput, setTaskInput] = useState("");  

  // 초기화
  useEffect(() => {
    getTodos();
  }, []);

  // 할 일 목록 호출
  const getTodos = () => {
    axios.post(`${endPoint}/todo/getTodos`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(0, response)
      setTasks(response.data);
    })
    .catch(err => {
      console.error("err", err)
    });
  }

  // 할 일 추가
  const addTask = () => {
    const data = {
      text: taskInput
    }

    if (taskInput.trim()) {
      axios.post(`${endPoint}/todo/createToDo`, 
        data,
        {
          headers: {
            'Content-Type': 'application/json' 
          }
        }
      )
      .then(response => {
        setTaskInput("");
        getTodos();
      })
      .catch(err => {
        console.error("err", err)
      });
    }
  };

  // 할 일 삭제
  const deleteTask = (id) => {
    const data = {
      id: id
    }

    axios.post(`${endPoint}/todo/deleteToDo`, 
      data,
      {
        headers: {
          'Content-Type': 'application/json' 
        }
      }
    )
    .then(response => {
      getTodos();
    })
    .catch(err => {
      console.error("err", err)
    });
  };

  // 할 일 완료 처리
  const toggleCompletion = (id) => {
    const filteredTasks = tasks.filter(task => task.id === id);

    const data = {
      id: id,
      completed: filteredTasks[0].completed === 'Y' ? 'N' : 'Y'
    }

    axios.post(`${endPoint}/todo/updateToDo`, 
      data,
      {
        headers: {
          'Content-Type': 'application/json' 
        }
      }
    )
    .then(response => {
      getTodos();
    })
    .catch(err => {
      console.error("err", err)
    });
  };

  // Home 버튼 클릭 시 홈으로 이동
  const goHome = () => {
    history('/'); // '/'는 홈 페이지의 경로
  };

  return (
    <Container className="mt-4">
      {/* 헤더 */}
      <Card className="shadow-sm mb-4 border-0 rounded-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <FaHome 
            onClick={goHome} 
            style={{ fontSize: '2rem', cursor: 'pointer', color: '#5A5A5A' }} 
          />
          <Card.Title className="text-center flex-grow-1" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5A5A5A' }}>
            To Do
          </Card.Title>
        </Card.Body>
      </Card>

      {/* 할 일 입력 */}
      <Row className="mb-3">
        <Col xs={9}>
          <Form.Control 
            type="text" 
            placeholder="새로운 할 일을 입력하세요."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="rounded-pill py-2 px-3 shadow-sm"
            style={{ borderColor: '#D1D1D1' }}
            maxLength={60}
          />
        </Col>
        <Col xs={3}>
          <Button 
            variant="primary" 
            onClick={addTask} 
            className="w-100 rounded-pill shadow-sm"
            style={{
              background: '#003366', // 남색 배경색
              borderColor: 'transparent'
            }}
          >
            추가
          </Button>
        </Col>
      </Row>

      {/* 할 일 목록 */}
      {tasks.length === 0 ? (
        <Card className="text-center p-4 shadow-sm border-0 rounded-3">
          <Card.Text className="text-muted">할 일이 없습니다 📝</Card.Text>
        </Card>
      ) : (
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <ListGroup>
            {tasks.map((task) => (
              <ListGroup.Item 
                key={task.id} 
                className={`d-flex justify-content-between align-items-center py-3 ${task.completed === 'Y' ? 'bg-light text-decoration-line-through' : ''}`}
                style={{ cursor: 'pointer', backgroundColor: '#f9f9f9' }}
              >
                <div onClick={() => toggleCompletion(task.id)} className="d-flex align-items-center">
                  <FaCheckCircle 
                    className={`me-3 ${task.completed === 'Y' ? 'text-success' : 'text-muted'}`} 
                    style={{ cursor: 'pointer' }}
                  />
                  {task.text}
                </div>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => deleteTask(task.id)} 
                  className="shadow-sm"
                  style={{
                    borderRadius: '50%',
                    backgroundColor: '#003366', // 삭제 버튼 배경색을 남색으로 변경
                    borderColor: 'transparent'
                  }}
                >
                  <FaTrashAlt style={{ color: 'white' }} /> {/* 아이콘을 흰색으로 설정 */}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
};

export default ToDo;
