import Link from 'next/link';

const TaskCard = ({ task, className }) => {
  return (
    <div className={`task-card ${className}`}>
      <h3>{task.title}</h3>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <Link href={`/edit-task/${task.id}`}>
        <button className="edit-btn">Edit</button>
      </Link>
      <style jsx>{`
        .task-card {
            background: #f0f0f0;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }     
               
        .task-card h3 {
            margin: 0;
            font-size: 1.2rem;
        }
        
        .task-card .edit-btn {
            background: #0070f3;
            color: #fff;
        }
      `}</style>
    </div>
  );
};

export default TaskCard;
