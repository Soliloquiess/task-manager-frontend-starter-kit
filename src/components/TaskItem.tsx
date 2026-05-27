import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (task: Task) => Promise<void>;
  onRemove: (id: number) => Promise<void>;
}

/** 할 일 한 건을 표시하는 행 (완료 토글 + 삭제) */
function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => void onToggle(task)}
        className="h-5 w-5 accent-indigo-600"
      />
      <span
        className={
          task.completed
            ? "flex-1 text-slate-400 line-through"
            : "flex-1 text-slate-900 dark:text-slate-100"
        }
      >
        {task.title}
      </span>
      <button
        type="button"
        onClick={() => void onRemove(task.id)}
        className="text-sm font-medium text-red-500 hover:text-red-600"
      >
        삭제
      </button>
    </li>
  );
}

export default TaskItem;
