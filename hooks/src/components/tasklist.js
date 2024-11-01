import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Task from './task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <div className='buttons'>
        <Link to="/tasklist">
          <button>TaskList</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>

      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button style={{marginLeft: '20px'}} type="submit">Adicionar Tarefa</button>
        <button onClick={clearTasks} style={{ marginLeft: '20px', }}>
          Limpar Tarefas
        </button>
      </form>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => toggleTaskCompletion(task.id)}
          />
        ))}
      </div>


    </div>
  );
};

export default TaskList;
