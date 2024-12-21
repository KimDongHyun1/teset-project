import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Form, ListGroup, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'; // 아이콘 추가

const ToDo = () => {
  // lobic

  // 할 일 목록
  const [tasks, setTasks] = useState([]);  

  // 입력값
  const [taskInput, setTaskInput] = useState("");  

  // 초기화
  useEffect(() => {
    const defaultTasks = [
      {
        id: '1',
        text: '내 블로그 만들기'
      },
      {
        id: '2',
        text: 'AWS 자격증 취득'
      },
      {
        id: '3',
        text: '68KG 만들기'
      },
      {
        id: '4',
        text: '슬램덩크 보기'
      },
      {
        id: '5',
        text: '템플스테이 체험'
      }
    ]

    setTasks(defaultTasks);    
  }, [])

  // 새로운 할 일 추가
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  // 할 일 완료 처리
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 할 일 삭제
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container className="mt-4">
      {/* 헤더 */}
      <Card className="shadow-sm mb-4 border-0 rounded-3">
        <Card.Body>
          <Card.Title className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#5A5A5A' }}>
            할 일 목록
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
          />
        </Col>
        <Col xs={3}>
          <Button 
            variant="primary" 
            onClick={addTask} 
            className="w-100 rounded-pill shadow-sm"
            style={{ background: 'linear-gradient(135deg, #FF4B2B, #FF416C)', borderColor: 'transparent' }}
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
        <ListGroup>
          {tasks.map((task) => (
            <ListGroup.Item 
              key={task.id} 
              className={`d-flex justify-content-between align-items-center py-3 ${task.completed ? 'bg-light text-decoration-line-through' : ''}`}
              style={{ cursor: 'pointer', backgroundColor: '#f9f9f9' }}
            >
              <div onClick={() => toggleCompletion(task.id)} className="d-flex align-items-center">
                <FaCheckCircle 
                  className={`me-3 ${task.completed ? 'text-success' : 'text-muted'}`} 
                  style={{ cursor: 'pointer' }}
                />
                {task.text}
              </div>
              <Button 
                variant="danger" 
                size="sm" 
                onClick={() => deleteTask(task.id)} 
                className="shadow-sm"
                style={{ borderRadius: '50%' }}
              >
                <FaTrashAlt />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default ToDo;
