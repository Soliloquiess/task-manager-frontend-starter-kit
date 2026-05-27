import { useState, type FormEvent } from "react";

interface TaskFormProps {
  onAdd: (title: string) => Promise<void>;
}

/** 새 할 일을 입력받는 폼 */
function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = title.trim();
    if (trimmed.length === 0) {
      return;
    }

    setSubmitting(true);
    try {
      await onAdd(trimmed);
      setTitle(""); // 성공 시 입력창 비우기
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
      />
      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
      >
        추가
      </button>
    </form>
  );
}

export default TaskForm;
