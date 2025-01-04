import { useState, useEffect } from 'react';

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
      <style jsx>{`
        task-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .task-form label {
            display: flex;
            flex-direction: column;
            font-size: 1rem;
        }
        
        .task-form input[type="text"] {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .task-form input[type="checkbox"] {
            width: 1.5rem;
            height: 1.5rem;
        }
        
        .submit-btn {
            background: #3e6da3;
            color: white;
        }
        
        .submit-btn:hover {
            background: #005bb5;
        }
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .add-task-btn {
            background-color: #421c28;
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .add-task-btn:hover {
            background-color: #005bb5;
        }
        .task-list {
            margin-top: 1rem;
        }
        .task-card {
            padding: 1rem;
            border: 5px solid #706c6c;
            border-radius: 5px;
            text-align: center;
            font-size: 1.05rem;
        }
        .completed {
            background-color: #d4edda; 
            border-color: #c3e6cb;
        }
        .pending {
            background-color: #f8d7da; 
            border-color: #f5c6cb;
        }
        
        .task-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .edit-btn {
            background-color:rgb(35, 56, 67);
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .edit-btn:hover {
            background-color: #005bb5;
        }
      `}</style>
    </form>
  );
};

export default TaskForm;
