import { useCallback, useEffect, useState } from "react";

import {
  createTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from "../api/tasks";
import type { Task } from "../types/task";

/**
 * 할 일 목록 상태와 CRUD 동작을 한 곳에서 관리하는 커스텀 훅.
 * 컴포넌트는 UI에만 집중하고, 데이터 흐름은 이 훅이 담당한다.
 */
export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 목록 불러오기
  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setTasks(await fetchTasks());
    } catch (e) {
      setError(e instanceof Error ? e.message : "목록을 불러오지 못했습니다");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  // 추가
  const addTask = useCallback(async (title: string) => {
    const created = await createTask({ title });
    setTasks((prev) => [...prev, created]);
  }, []);

  // 완료 여부 토글
  const toggleTask = useCallback(async (task: Task) => {
    const updated = await updateTask(task.id, {
      title: task.title,
      completed: !task.completed,
    });
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }, []);

  // 삭제
  const removeTask = useCallback(async (id: number) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { tasks, loading, error, addTask, toggleTask, removeTask, reload: load };
}
