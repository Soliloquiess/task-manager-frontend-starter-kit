import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (task: Task) => Promise<void>;
  onRemove: (id: number) => Promise<void>;
}

/** 할 일 목록. 비어 있으면 안내 문구를 보여준다. */
function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="py-8 text-center text-slate-400">
        아직 할 일이 없습니다. 위에서 추가해 보세요!
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TaskList;
