import React from 'react';
import styled from 'styled-components';
import Todoitem from './Todoitem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      <div>
        {todos.map((todo) => {
          return (
            <Todoitem
              key={todo.id}
              text={todo.text}
              done={todo.done}
              id={todo.id}
            />
          );
        })}
      </div>
    </TodoListBlock>
  );
}
