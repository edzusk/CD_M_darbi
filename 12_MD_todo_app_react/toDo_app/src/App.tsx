import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (): void => {
    if (!newTodo) return;
    setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>To-do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={(): void => toggleTodo(todo.id)} />
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default App
