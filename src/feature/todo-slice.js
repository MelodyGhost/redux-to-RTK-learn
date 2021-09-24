import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, item) => {
      state.list.push(item.payload);
    },
    del: (state, id) => {
      state.list = state.list.filter((l) => l.id != id.payload);
    },
    clearAll: (state) => {
      state.list = [];
    },
  },
});

export const delAsync = (id) => (dispatch) =>
  setTimeout(() => dispatch(del(id)), 500);

export const { add, del, clearAll } = todoSlice.actions;
export default todoSlice.reducer;
