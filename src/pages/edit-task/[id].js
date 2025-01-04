import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateTask } from '../../store/tasksSlice';
import TaskForm from '../../components/TaskForm';

const EditTaskPage = () => {
  const router = useRouter();
  const { id } = router.query; 
  const dispatch = useDispatch();

  const task = useSelector((state) =>
    state.tasks.tasks.find((t) => t.id === parseInt(id))
  );

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (task) {
      setInitialData(task);
    }
  }, [task]);

  const handleUpdateTask = (data) => {
    dispatch(updateTask({ id: parseInt(id), ...data }));
    router.push('/');
  };

  if (!initialData) {
    return <p>Loading task details...</p>;
  }

  return (
    <div className="container">
      <h1>Edit Task</h1>
      <TaskForm initialData={initialData} onSubmit={handleUpdateTask} />
      <style jsx>{`
        .task-form {
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
            margin-bottom: 0.5rem;
            border: 5px solid #706c6c;
            border-radius: 5px;
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
            background-color: #80b9d7;
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
    </div>
  );
};

export default EditTaskPage;
