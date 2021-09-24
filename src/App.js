import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { add, del, clearAll, delAsync } from './feature/todo-slice';
import './style.css';

export default function App() {
  const [input, setInput] = React.useState('');

  const todos = useSelector((store) => store.todo.list);

  const dispatch = useDispatch();

  function addTodo() {
    dispatch(add({ id: uuid(), todo: input }));
    setInput('');
  }

  return (
    <div>
      <div>
        <h1>Simple Todo (learning RTK)</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={() => dispatch(clearAll())}>Clear All</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => dispatch(delAsync(todo.id))}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
