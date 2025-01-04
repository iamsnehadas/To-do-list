import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateTask } from '../../store/tasksSlice';
import TaskForm from '../../components/TaskForm';
import '../../styles/globals.css';

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
    </div>
  );
};

export default EditTaskPage;
