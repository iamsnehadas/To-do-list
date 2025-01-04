import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/tasksSlice';
import TaskCard from '../components/TaskCard';
import Link from 'next/link';
import '../styles/task.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="main-head">To-Do List</h1>
        <Link href="/add-task">
          <button className="add-task-btn">+ Add Task</button>
        </Link>
      </div>
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div className="task-list">
          {tasks.length > 0 ? (
            tasks
              .slice() 
              .reverse() 
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  className={`task-card ${
                    task.completed ? 'completed' : 'pending'
                  }`}
                />
              ))
          ) : (
            <p>No tasks available. Add a new task!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
