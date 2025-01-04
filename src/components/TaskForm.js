import { useState, useEffect } from 'react';
import '../styles/globals.css';

const TaskForm = ({ initialData = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [completed, setCompleted] = useState(initialData.completed || false);

  useEffect(() => {
    if (initialData?.title && initialData?.title !== title) {
      setTitle(initialData.title);
      setCompleted(initialData.completed || false);
    }
  }, [initialData, title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, completed });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label>
        Task Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit" className="submit-btn">Save Task</button>
    </form>
  );
};

export default TaskForm;
