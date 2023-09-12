import { v4 as uuidv4 } from 'uuid';

const initialTodos = [
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
];

export const addTodo = (payload) => ({
  type: 'ADD_TODO',
  payload,
});

export const removeTodo = (payload) => ({
  type: 'REMOVE_TODO',
  payload,
});

export const switchTodo = (payload) => ({
  type: 'SWITCH_TODO',
  payload,
});

const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.payload);

    case 'SWITCH_TODO':
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    default:
      return state;
  }
};

export default todos;
