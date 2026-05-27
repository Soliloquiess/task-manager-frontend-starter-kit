// PostToolUse(Edit|Write) 훅: 방금 수정/생성된 TS·TSX 파일에 ESLint --fix 를 자동 적용한다.
// Claude Code 가 stdin 으로 넘겨주는 JSON 에서 수정된 파일 경로를 읽는다.
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

let filePath = "";
try {
  const input = JSON.parse(readFileSync(0, "utf8")); // 0 = stdin
  filePath = input?.tool_input?.file_path ?? "";
} catch {
  process.exit(0);
}

// 대상 확장자가 아니면 조용히 종료
if (!/\.(ts|tsx)$/.test(filePath)) {
  process.exit(0);
}

// 의존성 미설치(예: 갓 클론한 상태)면 건너뛴다.
// npx --no-install 은 패키지를 새로 내려받지 않고, 없으면 그냥 실패한다(무시).
spawnSync("npx", ["--no-install", "eslint", "--fix", filePath], {
  stdio: "inherit",
  shell: true,
});

// 포맷 실패가 작업 자체를 막지 않도록 항상 정상 종료한다.
process.exit(0);
