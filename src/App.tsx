import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks, loading, error, addTask, toggleTask, removeTask } = useTasks();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-900">
      <main className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            할 일 관리
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Spring Boot API + React 데모
          </p>
        </header>

        <TaskForm onAdd={addTask} />

        {/* 에러 메시지 (주로 백엔드가 꺼져 있을 때) */}
        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950">
            {error} — 백엔드 서버(localhost:8080)가 실행 중인지 확인하세요.
          </p>
        )}

        {loading ? (
          <p className="py-8 text-center text-slate-400">불러오는 중...</p>
        ) : (
          <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
        )}
      </main>
    </div>
  );
}

export default App;
