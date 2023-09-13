import React from 'react';
import styled from 'styled-components';
import Todoitem from './Todoitem';
import { useRecoilValue } from 'recoil';
import { initialTodosAtom } from '../recoil/todoAtom';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useRecoilValue(initialTodosAtom);
  return (
    <TodoListBlock>
      <div>
        {todos.map((todo) => {
          return (
            <Todoitem
              key={todo.id}
              done={todo.done}
              text={todo.text}
              id={todo.id}
            />
          );
        })}
      </div>
    </TodoListBlock>
  );
}
