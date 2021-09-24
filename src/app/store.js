import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todo-slice';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
