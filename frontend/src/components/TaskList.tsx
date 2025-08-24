import api from "../api/api";
import type { Task } from "../models/task";

interface Props {
  tasks: Task[];
  onTaskCompleted: () => void;
}

export default function TaskList({ tasks, onTaskCompleted }: Props) {
  const completeTask = async (id: string) => {
    await api.put(`/Tasks/${id}/complete`);
    onTaskCompleted();
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.Id}>
            <span>
              {t.Title} - ({t.Status === 2 ? "Done" : "Todo"})
            </span>
            {t.Status !== 2 && (
              <button onClick={() => completeTask(t.Id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
