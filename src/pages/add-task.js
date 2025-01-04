import TaskForm from '../components/TaskForm';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';
import { useRouter } from 'next/router';
import '../styles/task.css';

const AddTaskPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddTask = (data) => {
    dispatch(addTask(data));
    router.push('/');
  };

  return (
    <div className="container">
      <h1>Add New Task</h1>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTaskPage;
