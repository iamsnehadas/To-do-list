import Link from 'next/link';
import '../styles/globals.css';

const TaskCard = ({ task, className }) => {
  return (
    <div className={`task-card ${className}`}>
      <h3>{task.title}</h3>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <Link href={`/edit-task/${task.id}`}>
        <button className="edit-btn">Edit</button>
      </Link>
    </div>
  );
};

export default TaskCard;
