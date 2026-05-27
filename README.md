# Task Manager Frontend (React 데모)

> ### 🔗 관련 저장소 — 백엔드
> 이 데모가 호출하는 REST API: **[springboot-api-starter-kit](https://github.com/Soliloquiess/springboot-api-starter-kit)**
> 두 저장소는 한 쌍의 **풀스택 데모**입니다. 함께 실행하면 동작합니다 — 백엔드 `:8080` + 프론트 `:5173`

할 일(Task) REST API를 소비하는 프론트엔드 데모입니다.
Vite + React + TypeScript + Tailwind CSS 조합으로, 새 프론트 프로젝트를 빠르게 시작하는 템플릿으로도 쓸 수 있습니다.

## 기술 스택

- React 19 + TypeScript
- Vite 8 (개발 서버 / 빌드)
- Tailwind CSS 4 (`@tailwindcss/vite` 플러그인)

## 주요 기능

- 할 일 목록 조회 / 추가 / 완료 토글 / 삭제 (백엔드 CRUD 연동)
- `ApiResponse<T>` 응답 래퍼를 타입으로 맞춰 안전하게 파싱
- 데이터 흐름을 `useTasks` 커스텀 훅으로 분리, 컴포넌트는 UI에 집중
- 다크모드 대응, 반응형 레이아웃
- 개발 중 `/api` 요청을 백엔드(8080)로 프록시 (CORS 설정 불필요)

## 실행 방법

```bash
npm install
npm run dev      # http://localhost:5173
```

> ⚠️ 데이터를 보려면 백엔드가 함께 실행 중이어야 합니다.
> [springboot-api-starter-kit](https://github.com/Soliloquiess/springboot-api-starter-kit)을
> `./gradlew bootRun`(포트 8080)으로 띄운 뒤 이 앱을 실행하세요.
> 백엔드가 꺼져 있으면 화면에 안내 에러 메시지가 표시됩니다.

```bash
npm run build    # 타입체크 + 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## 프로젝트 구조

```
src/
├── api/          # 백엔드 호출 함수 (fetch 래퍼)
├── components/   # TaskForm, TaskItem, TaskList
├── hooks/        # useTasks (목록 상태 + CRUD)
├── types/        # 백엔드 응답과 맞춘 타입 정의
├── App.tsx       # 화면 조합
└── main.tsx      # 진입점
```

## 백엔드 연동 지점

`vite.config.ts`의 프록시 대상(`http://localhost:8080`)과
`src/api/tasks.ts`의 `BASE_URL`(`/api/v1/tasks`)만 바꾸면 다른 API에도 붙일 수 있습니다.
