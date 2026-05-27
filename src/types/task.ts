// 백엔드(Spring Boot API Starter)의 응답 구조와 1:1로 맞춘 타입 정의

/** 모든 API 응답을 감싸는 공통 래퍼 (백엔드의 ApiResponse<T> 와 동일) */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: Record<string, string>;
}

/** 할 일 도메인 */
export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

/** 생성 요청 본문 */
export interface TaskCreateRequest {
  title: string;
}

/** 수정 요청 본문 */
export interface TaskUpdateRequest {
  title: string;
  completed: boolean;
}
