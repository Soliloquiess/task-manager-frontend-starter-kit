---
argument-hint: <컴포넌트명 PascalCase> (예: TaskFilter)
description: src/components 에 TypeScript + Tailwind 함수형 컴포넌트를 생성
---

`$1` 이름의 React 컴포넌트를 이 프로젝트의 기존 컴포넌트(`TaskForm`, `TaskItem`, `TaskList`)와 **동일한 스타일**로 생성해줘.

## 생성 위치
`src/components/$1.tsx`

## 템플릿 규칙
- 함수형 컴포넌트 + `export default`
- props 가 필요하면 `interface $1Props` 를 파일 상단에 정의 (props 없으면 생략)
- 스타일은 Tailwind 유틸리티 클래스로 작성, 다크모드(`dark:`) 대응
- TypeScript 엄격 준수: `any` 금지, 이벤트/상태에 명시적 타입
- 들여쓰기 2칸, 식별자는 영어, 주석은 한국어
- 타입 전용 import 는 `import type { ... }` 사용

## 작업 순서
1. `src/types/` 에 관련 타입이 이미 있으면 재사용하고, 없으면 props 인터페이스만 로컬 정의
2. 컴포넌트 파일 생성
3. 어디서 어떻게 가져다 쓰면 되는지 import 예시 한 줄을 알려줘

추가 인자로 설명이 오면(`$ARGUMENTS`) 그 요구사항을 컴포넌트 내용에 반영해줘.
