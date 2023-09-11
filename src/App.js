import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoCreate todos={todos} setTodos={setTodos} />
      </TodoTemplate>
    </>
  );
}

export default App;

const initialTodos = [
  {
    id: 1,
    text: '기본 TODOLIST 생성',
    done: true,
  },
  {
    id: 2,
    text: 'CONTEXT 사용 TODOLIST 생성',
    done: true,
  },
  {
    id: 3,
    text: 'REDUX 사용 TODOLIST 생성',
    done: false,
  },
  {
    id: 4,
    text: 'RECOIL 사용 TODOLIST 생성',
    done: false,
  },
];
