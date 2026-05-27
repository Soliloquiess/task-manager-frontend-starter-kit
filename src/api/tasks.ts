import type {
  ApiResponse,
  Task,
  TaskCreateRequest,
  TaskUpdateRequest,
} from "../types/task";

// vite.config.ts 의 프록시 설정으로 /api 요청이 백엔드(8080)로 전달된다.
const BASE_URL = "/api/v1/tasks";

/**
 * 공통 fetch 래퍼.
 * 백엔드의 ApiResponse 를 해석해 success 가 false 면 에러로 던진다.
 */
async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const body = (await response.json()) as ApiResponse<T>;
  if (!response.ok || !body.success) {
    throw new Error(body.message ?? "요청을 처리하지 못했습니다");
  }
  return body.data;
}

export function fetchTasks(): Promise<Task[]> {
  return request<Task[]>(BASE_URL);
}

export function createTask(payload: TaskCreateRequest): Promise<Task> {
  return request<Task>(BASE_URL, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updateTask(id: number, payload: TaskUpdateRequest): Promise<Task> {
  return request<Task>(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export function deleteTask(id: number): Promise<null> {
  return request<null>(`${BASE_URL}/${id}`, { method: "DELETE" });
}
