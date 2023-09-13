import { atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
export const initialTodosAtom = atom({
  key: 'initialTodosAtom',
  default: [
    {
      id: uuidv4(),
      text: '기본 TODOLIST 생성',
      done: true,
    },
    {
      id: uuidv4(),
      text: 'CONTEXT 사용 TODOLIST 생성',
      done: true,
    },
    {
      id: uuidv4(),
      text: 'REDUX 사용 TODOLIST 생성',
      done: false,
    },
    {
      id: uuidv4(),
      text: 'RECOIL 사용 TODOLIST 생성',
      done: false,
    },
  ],
});

export const undoneTasksSelector = selector({
  key: 'undoneTasks',
  get: ({ get }) => {
    const todos = get(initialTodosAtom);
    return todos.filter((todo) => !todo.done).length;
  },
});
