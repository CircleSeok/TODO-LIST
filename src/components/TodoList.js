import React from 'react';
import styled from 'styled-components';
import Todoitem from './Todoitem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList({ todos, setTodos }) {
  console.log(todos);
  return (
    <TodoListBlock>
      <div>
        {todos.map((todo) => {
          return (
            <Todoitem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </TodoListBlock>
  );
}
