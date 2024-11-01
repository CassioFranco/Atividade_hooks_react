import { useState } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, completed) => {
    const newTask = { id: tasks.length + 1, title, completed };
    setTasks([...tasks, newTask]);
  };

  return { tasks, addTask, setTasks };
}

export default useTasks;
