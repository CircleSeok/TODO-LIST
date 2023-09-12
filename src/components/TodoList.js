import React from 'react';
import styled from 'styled-components';
import Todoitem from './Todoitem';
import { useSelector } from 'react-redux';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <TodoListBlock>
      <div>
        {todos.map((todo) => {
          return (
            <Todoitem
              key={todo.id}
              done={todo.done}
              id={todo.id}
              text={todo.text}
            />
          );
        })}
      </div>
    </TodoListBlock>
  );
}
