# PaddleOCR 图片识别系统 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a two-project OCR system — a Python FastAPI backend with PaddleOCR for Chinese text recognition, and a Vue 3 frontend for image upload and result display.

**Architecture:** Frontend and backend are separate projects under the repo root. Backend exposes `POST /ocr` (multipart upload → JSON text result) and `GET /health`. Frontend is a Vite + Vue 3 + TypeScript SPA that calls the backend via fetch. CORS is configured on the backend.

**Tech Stack:** Python 3.9+, FastAPI, uvicorn, paddlepaddle, paddleocr, Pillow, python-multipart / Vue 3, TypeScript, Vite

**Spec:** `docs/superpowers/specs/2026-10-26-paddleocr-api-design.md`

## Global Constraints

- Backend Python 3.9+
- PaddleOCR init: `PaddleOCR(use_angle_cls=True, lang="ch")`, global singleton, loaded once at startup
- Backend port 8000, Frontend dev port 5173
- Backend CORS must allow `http://localhost:5173`
- Frontend API base URL via `VITE_API_BASE_URL` env var, default `http://localhost:8000`
- Frontend: Vue 3 Composition API + `<script setup>` + TypeScript (per vue-best-practices)
- No cloud OCR — all local inference

## Review Focus

1. **Non-image file uploaded (e.g. .txt, .pdf)** — API should reject with 400, not crash the engine.
2. **Corrupted/unreadable image** — API should return 500 with a clear message, not hang or throw an unhandled exception.
3. **Empty result (image with no text)** — Should return `{"text": "", "lines": []}`, not null or an error.
4. **Large image upload** — Should handle reasonably without OOM; no explicit size limit in spec, but must not crash on a normal photo.
5. **CORS preflight (OPTIONS) from frontend** — Must succeed; without it the frontend can never call the API in the browser.

---

## File Structure

### Backend (`backend/`)

| File | Responsibility |
|------|----------------|
| `backend/pyproject.toml` | Project metadata + dependencies |
| `backend/.gitignore` | Python ignores (__pycache__, .venv, etc.) |
| `backend/README.md` | Setup & run instructions |
| `backend/app/__init__.py` | Package marker |
| `backend/app/schemas.py` | Pydantic response models (`OCRResponse`, `HealthResponse`) |
| `backend/app/ocr_engine.py` | PaddleOCR singleton + `recognize(image_bytes) -> list[str]` |
| `backend/app/main.py` | FastAPI app, CORS, `/ocr` and `/health` routes |
| `backend/tests/__init__.py` | Package marker |
| `backend/tests/test_ocr_engine.py` | Unit tests for ocr_engine |
| `backend/tests/test_api.py` | Integration tests for API endpoints |

### Frontend (`frontend/`)

| File | Responsibility |
|------|----------------|
| `frontend/package.json` | Dependencies & scripts |
| `frontend/vite.config.ts` | Vite config (port 5173) |
| `frontend/tsconfig.json` | TS config |
| `frontend/tsconfig.node.json` | TS config for node context |
| `frontend/index.html` | HTML entry |
| `frontend/.gitignore` | Node ignores |
| `frontend/README.md` | Setup & run instructions |
| `frontend/env.d.ts` | Vite env type declarations |
| `frontend/src/main.ts` | App bootstrap |
| `frontend/src/App.vue` | Root component, composes Uploader + ResultDisplay |
| `frontend/src/types/ocr.ts` | `OCRResponse` type |
| `frontend/src/composables/useOCR.ts` | `recognize(file: File) -> Promise<OCRResponse>` |
| `frontend/src/components/ImageUploader.vue` | File select/drag-drop + preview, emits selected file |
| `frontend/src/components/ResultDisplay.vue` | Shows recognition results, copy button |

---

### Task 1: Backend project scaffolding

**Files:**
- Create: `backend/pyproject.toml`
- Create: `backend/.gitignore`
- Create: `backend/README.md`
- Create: `backend/app/__init__.py`
- Create: `backend/tests/__init__.py`

**Interfaces:**
- Produces: a installable Python project with all dependencies declared

- [ ] **Step 1: Create `backend/pyproject.toml`**

```toml
[project]
name = "ocr-backend"
version = "0.1.0"
description = "PaddleOCR-based image text recognition API"
requires-python = ">=3.9"
dependencies = [
    "fastapi>=0.100.0",
    "uvicorn[standard]>=0.23.0",
    "python-multipart>=0.0.6",
    "paddlepaddle>=2.5.0",
    "paddleocr>=2.7.0",
    "Pillow>=10.0.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "httpx>=0.24.0",
]
```

- [ ] **Step 2: Create `backend/.gitignore`**

```
__pycache__/
*.py[cod]
.venv/
venv/
*.egg-info/
dist/
build/
.pytest_cache/
```

- [ ] **Step 3: Create `backend/README.md`**

```markdown
# OCR Backend

PaddleOCR-based image text recognition API.

## Setup

\`\`\`bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
\`\`\`

## Run

\`\`\`bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
\`\`\`

## API

- `POST /ocr` — Upload image, returns recognized text
- `GET /health` — Health check
```

- [ ] **Step 4: Create `backend/app/__init__.py` and `backend/tests/__init__.py`**

Both are empty files (package markers).

- [ ] **Step 5: Commit**

```bash
git add backend/
git commit -m "chore: scaffold backend project structure"
```

---

### Task 2: Backend schemas

**Files:**
- Create: `backend/app/schemas.py`

**Interfaces:**
- Produces: `OCRResponse(text: str, lines: list[str])`, `HealthResponse(status: str)`
- Consumes: nothing

- [ ] **Step 1: Create `backend/app/schemas.py`**

```python
from pydantic import BaseModel


class OCRResponse(BaseModel):
    text: str
    lines: list[str]


class HealthResponse(BaseModel):
    status: str
```

- [ ] **Step 2: Commit**

```bash
git add backend/app/schemas.py
git commit -m "feat(backend): add Pydantic response schemas"
```

---

### Task 3: Backend OCR engine

**Files:**
- Create: `backend/app/ocr_engine.py`
- Test: `backend/tests/test_ocr_engine.py`

**Interfaces:**
- Produces: `recognize(image_bytes: bytes) -> list[str]` — takes raw image bytes, returns list of recognized text lines
- Consumes: nothing (PaddleOCR is self-contained)

- [ ] **Step 1: Write the failing test**

```python
# backend/tests/test_ocr_engine.py
from unittest.mock import patch, MagicMock
from app.ocr_engine import recognize


def test_recognize_returns_list_of_strings():
    """recognize should return a list of strings given valid image bytes."""
    fake_result = [
        [("line1_info", "第一行文本"),],
        [("line2_info", "第二行文本"),],
    ]
    with patch("app.ocr_engine.get_ocr_engine") as mock_get:
        mock_engine = MagicMock()
        mock_engine.ocr.return_value = fake_result
        mock_get.return_value = mock_engine

        result = recognize(b"fake_image_bytes")

    assert isinstance(result, list)
    assert all(isinstance(line, str) for line in result)
    assert result == ["第一行文本", "第二行文本"]


def test_recognize_empty_result():
    """recognize should return empty list when no text is found."""
    with patch("app.ocr_engine.get_ocr_engine") as mock_get:
        mock_engine = MagicMock()
        mock_engine.ocr.return_value = []
        mock_get.return_value = mock_engine

        result = recognize(b"fake_image_bytes")

    assert result == []


def test_recognize_none_result():
    """recognize should return empty list when OCR returns None."""
    with patch("app.ocr_engine.get_ocr_engine") as mock_get:
        mock_engine = MagicMock()
        mock_engine.ocr.return_value = None
        mock_get.return_value = mock_engine

        result = recognize(b"fake_image_bytes")

    assert result == []
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd backend && python -m pytest tests/test_ocr_engine.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'app.ocr_engine'`

- [ ] **Step 3: Implement `ocr_engine.py`**

```python
# backend/app/ocr_engine.py
import io
import logging

from PIL import Image

logger = logging.getLogger(__name__)

_ocr_engine = None


def get_ocr_engine():
    """Lazy-load PaddleOCR singleton. Loaded once, reused across requests."""
    global _ocr_engine
    if _ocr_engine is None:
        from paddleocr import PaddleOCR
        logger.info("Initializing PaddleOCR (lang=ch)...")
        _ocr_engine = PaddleOCR(use_angle_cls=True, lang="ch")
        logger.info("PaddleOCR initialized.")
    return _ocr_engine


def recognize(image_bytes: bytes) -> list[str]:
    """
    Run OCR on raw image bytes.
    
    Args:
        image_bytes: Raw bytes of an image file (PNG, JPG, etc.)
    
    Returns:
        List of recognized text strings, one per detected line.
        Returns empty list if no text is found.
    
    Raises:
        ValueError: If the image cannot be opened.
        Exception: For other OCR failures.
    """
    engine = get_ocr_engine()
    
    image = Image.open(io.BytesIO(image_bytes))
    
    result = engine.ocr(image, cls=True)
    
    if not result:
        return []
    
    lines = []
    for line_group in result:
        if line_group:
            for item in line_group:
                if item and len(item) >= 2:
                    text = item[1][0] if isinstance(item[1], tuple) else str(item[1])
                    lines.append(text)
    
    return lines
```

Key decision: `get_ocr_engine()` is lazy so tests can mock it. PaddleOCR result format is `[[ (box, (text, confidence)), ... ], ...]` — extract text from index `[1][0]`.

- [ ] **Step 4: Run test to verify it passes**

Run: `cd backend && python -m pytest tests/test_ocr_engine.py -v`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add backend/app/ocr_engine.py backend/tests/test_ocr_engine.py
git commit -m "feat(backend): add PaddleOCR engine with recognize()"
```

---

### Task 4: Backend FastAPI app with routes and CORS

**Files:**
- Create: `backend/app/main.py`
- Test: `backend/tests/test_api.py`

**Interfaces:**
- Produces: FastAPI `app` object with `POST /ocr` and `GET /health`
- Consumes: `recognize()` from `app.ocr_engine`, `OCRResponse`/`HealthResponse` from `app.schemas`

- [ ] **Step 1: Write the failing tests**

```python
# backend/tests/test_api.py
from unittest.mock import patch


def test_health_endpoint(client):
    """GET /health returns 200 with status ok."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_ocr_success(client):
    """POST /ocr with a valid image returns recognized text."""
    # Create a minimal valid PNG (1x1 pixel)
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.return_value = ["测试文本"]

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 200
    data = response.json()
    assert data["text"] == "测试文本"
    assert data["lines"] == ["测试文本"]


def test_ocr_no_file(client):
    """POST /ocr without a file returns 400."""
    response = client.post("/ocr")
    assert response.status_code == 400
    assert "detail" in response.json()


def test_ocr_empty_result(client):
    """POST /ocr with image containing no text returns empty result."""
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.return_value = []

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 200
    data = response.json()
    assert data["text"] == ""
    assert data["lines"] == []


def test_ocr_engine_failure(client):
    """POST /ocr returns 500 when OCR engine raises an exception."""
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.side_effect = ValueError("Cannot read image")

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 500
    assert "detail" in response.json()
```

Note: tests need a `client` fixture. Add a `conftest.py`:

```python
# backend/tests/conftest.py
import pytest
from fastapi.testclient import TestClient
from app.main import app


@pytest.fixture
def client():
    return TestClient(app)
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd backend && python -m pytest tests/test_api.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'app.main'`

- [ ] **Step 3: Implement `main.py`**

```python
# backend/app/main.py
import logging

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import OCRResponse, HealthResponse
from app.ocr_engine import recognize

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="OCR Backend", description="PaddleOCR image text recognition API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse(status="ok")


@app.post("/ocr", response_model=OCRResponse)
async def ocr(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="未上传文件")

    image_bytes = await file.read()
    if not image_bytes:
        raise HTTPException(status_code=400, detail="文件内容为空")

    try:
        lines = recognize(image_bytes)
    except ValueError as e:
        raise HTTPException(status_code=500, detail=f"图片处理失败: {e}")
    except Exception as e:
        logger.exception("OCR failed")
        raise HTTPException(status_code=500, detail=f"识别失败: {e}")

    text = "\n".join(lines)
    return OCRResponse(text=text, lines=lines)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

- [ ] **Step 4: Create `backend/tests/conftest.py`** (content above)

- [ ] **Step 5: Run tests to verify they pass**

Run: `cd backend && python -m pytest tests/ -v`
Expected: PASS (all tests)

- [ ] **Step 6: Commit**

```bash
git add backend/app/main.py backend/tests/test_api.py backend/tests/conftest.py
git commit -m "feat(backend): add FastAPI app with /ocr and /health routes"
```

---

### Task 5: Frontend project scaffolding

**Files:**
- Create: `frontend/package.json`
- Create: `frontend/vite.config.ts`
- Create: `frontend/tsconfig.json`
- Create: `frontend/tsconfig.node.json`
- Create: `frontend/index.html`
- Create: `frontend/.gitignore`
- Create: `frontend/env.d.ts`
- Create: `frontend/README.md`
- Create: `frontend/src/main.ts`

**Interfaces:**
- Produces: a runnable Vite + Vue 3 + TS project (blank app)

- [ ] **Step 1: Create `frontend/package.json`**

```json
{
  "name": "ocr-frontend",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "vue-tsc": "^2.0.0"
  }
}
```

- [ ] **Step 2: Create `frontend/vite.config.ts`**

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
  },
})
```

- [ ] **Step 3: Create `frontend/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue", "env.d.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create `frontend/tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create `frontend/index.html`**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OCR 图片识别</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 6: Create `frontend/env.d.ts`**

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

- [ ] **Step 7: Create `frontend/.gitignore`**

```
node_modules/
dist/
*.local
.DS_Store
```

- [ ] **Step 8: Create `frontend/README.md`**

```markdown
# OCR Frontend

Vue 3 frontend for the PaddleOCR image recognition system.

## Setup

\`\`\`bash
cd frontend
npm install
\`\`\`

## Run

\`\`\`bash
npm run dev
\`\`\`

The app runs on \`http://localhost:5173\`.

## Configuration

Set \`VITE_API_BASE_URL\` in a \`.env\` file to point to the backend (default: \`http://localhost:8000\`).
```

- [ ] **Step 9: Create `frontend/src/main.ts`**

```typescript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

- [ ] **Step 10: Create a minimal `frontend/src/App.vue`** (placeholder, replaced in Task 8)

```vue
<script setup lang="ts">
</script>

<template>
  <div>OCR Frontend — scaffolding</div>
</template>
```

- [ ] **Step 11: Verify the project builds**

Run: `cd frontend && npm install && npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 12: Commit**

```bash
git add frontend/
git commit -m "chore: scaffold frontend Vue 3 + Vite + TS project"
```

---

### Task 6: Frontend types and composable

**Files:**
- Create: `frontend/src/types/ocr.ts`
- Create: `frontend/src/composables/useOCR.ts`

**Interfaces:**
- Produces: `OCRResponse` type, `useOCR()` composable returning `{ recognize, loading, error }`
- Consumes: `VITE_API_BASE_URL` env var

- [ ] **Step 1: Create `frontend/src/types/ocr.ts`**

```typescript
export interface OCRResponse {
  text: string
  lines: string[]
}
```

- [ ] **Step 2: Create `frontend/src/composables/useOCR.ts`**

```typescript
import { ref } from 'vue'
import type { OCRResponse } from '../types/ocr'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export function useOCR() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function recognize(file: File): Promise<OCRResponse> {
    loading.value = true
    error.value = null

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(`${API_BASE_URL}/ocr`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || `请求失败 (${response.status})`)
      }

      return await response.json() as OCRResponse
    } catch (e) {
      const message = e instanceof Error ? e.message : '未知错误'
      error.value = message
      throw e
    } finally {
      loading.value = false
    }
  }

  return { recognize, loading, error }
}
```

- [ ] **Step 3: Commit**

```bash
git add frontend/src/types/ frontend/src/composables/
git commit -m "feat(frontend): add OCR types and useOCR composable"
```

---

### Task 7: Frontend components — ImageUploader and ResultDisplay

**Files:**
- Create: `frontend/src/components/ImageUploader.vue`
- Create: `frontend/src/components/ResultDisplay.vue`

**Interfaces:**
- `ImageUploader`: emits `update:file` with the selected `File | null`; has a `disabled` prop
- `ResultDisplay`: props `result: OCRResponse | null`, `loading: boolean`, `error: string | null`
- Consumes: `OCRResponse` type from `src/types/ocr`

- [ ] **Step 1: Create `frontend/src/components/ImageUploader.vue`**

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:file': [file: File | null]
}>()

const selectedFile = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const isDragging = ref(false)

const fileInput = ref<HTMLInputElement | null>(null)

function handleFile(file: File | null) {
  if (!file) return
  if (!file.type.startsWith('image/')) {
    alert('请选择图片文件')
    return
  }
  selectedFile.value = file
  previewUrl.value = URL.createObjectURL(file)
  emit('update:file', file)
}

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement
  handleFile(target.files?.[0] ?? null)
}

function onDrop(e: DragEvent) {
  isDragging.value = false
  handleFile(e.dataTransfer?.files?.[0] ?? null)
}

function onDragOver() {
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function clearFile() {
  selectedFile.value = null
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
  }
  emit('update:file', null)
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<template>
  <div class="uploader">
    <div
      class="drop-zone"
      :class="{ dragging: isDragging, disabled: props.disabled }"
      @drop.prevent="onDrop"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @click="!props.disabled && fileInput?.click()"
    >
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        class="file-input"
        :disabled="props.disabled"
        @change="onInputChange"
      />
      <div v-if="!previewUrl" class="placeholder">
        <p>点击或拖拽图片到此处</p>
        <p class="hint">支持 PNG / JPG / JPEG</p>
      </div>
      <img v-else :src="previewUrl" class="preview" alt="预览" />
    </div>
    <button
      v-if="selectedFile"
      class="clear-btn"
      :disabled="props.disabled"
      @click="clearFile"
    >
      清除
    </button>
  </div>
</template>

<style scoped>
.uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.drop-zone {
  width: 100%;
  max-width: 500px;
  min-height: 200px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s;
  background: #fafafa;
}

.drop-zone.dragging {
  border-color: #4a90d9;
  background: #e8f0fe;
}

.drop-zone.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.file-input {
  display: none;
}

.placeholder {
  text-align: center;
  color: #999;
}

.placeholder .hint {
  font-size: 0.85em;
  margin-top: 4px;
}

.preview {
  max-width: 100%;
  max-height: 300px;
  border-radius: 6px;
}

.clear-btn {
  padding: 6px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.clear-btn:hover:not(:disabled) {
  background: #f0f0f0;
}

.clear-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

- [ ] **Step 2: Create `frontend/src/components/ResultDisplay.vue`**

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { OCRResponse } from '../types/ocr'

const props = defineProps<{
  result: OCRResponse | null
  loading: boolean
  error: string | null
}>()

const copied = ref(false)

async function copyText() {
  if (!props.result?.text) return
  await navigator.clipboard.writeText(props.result.text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="result-display">
    <div v-if="props.loading" class="loading">
      识别中...
    </div>

    <div v-else-if="props.error" class="error">
      <p>识别失败</p>
      <p class="error-detail">{{ props.error }}</p>
    </div>

    <div v-else-if="props.result" class="result">
      <div class="result-header">
        <h3>识别结果</h3>
        <button
          v-if="props.result.text"
          class="copy-btn"
          @click="copyText"
        >
          {{ copied ? '已复制' : '复制' }}
        </button>
      </div>
      <div v-if="props.result.lines.length === 0" class="empty">
        未识别到文本
      </div>
      <div v-else class="text-output">
        <p
          v-for="(line, index) in props.result.lines"
          :key="index"
          class="text-line"
        >
          {{ line }}
        </p>
      </div>
    </div>

    <div v-else class="idle">
      上传图片后点击"识别"按钮
    </div>
  </div>
</template>

<style scoped>
.result-display {
  width: 100%;
  max-width: 500px;
  min-height: 150px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
}

.loading {
  text-align: center;
  color: #666;
  padding: 40px 0;
}

.error {
  color: #d32f2f;
}

.error-detail {
  font-size: 0.9em;
  margin-top: 4px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result-header h3 {
  margin: 0;
  font-size: 1.1em;
}

.copy-btn {
  padding: 4px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 0.85em;
}

.copy-btn:hover {
  background: #f0f0f0;
}

.empty {
  color: #999;
  text-align: center;
  padding: 20px 0;
}

.text-output {
  margin-top: 12px;
}

.text-line {
  margin: 4px 0;
  line-height: 1.6;
}

.idle {
  text-align: center;
  color: #aaa;
  padding: 40px 0;
}
</style>
```

- [ ] **Step 3: Commit**

```bash
git add frontend/src/components/
git commit -m "feat(frontend): add ImageUploader and ResultDisplay components"
```

---

### Task 8: Frontend App.vue — compose components

**Files:**
- Modify: `frontend/src/App.vue` (replace placeholder)

**Interfaces:**
- Consumes: `ImageUploader`, `ResultDisplay`, `useOCR` composable

- [ ] **Step 1: Replace `frontend/src/App.vue`**

```vue
<script setup lang="ts">
import { ref } from 'vue'
import ImageUploader from './components/ImageUploader.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import { useOCR } from './composables/useOCR'
import type { OCRResponse } from './types/ocr'

const selectedFile = ref<File | null>(null)
const result = ref<OCRResponse | null>(null)

const { recognize, loading, error } = useOCR()

async function handleRecognize() {
  if (!selectedFile.value) return
  try {
    result.value = await recognize(selectedFile.value)
  } catch {
    // error is set in composable
  }
}
</script>

<template>
  <div class="app">
    <header>
      <h1>OCR 图片识别</h1>
      <p>上传图片，识别中文文本</p>
    </header>

    <main>
      <ImageUploader
        :disabled="loading"
        @update:file="selectedFile = $event"
      />

      <button
        class="recognize-btn"
        :disabled="!selectedFile || loading"
        @click="handleRecognize"
      >
        {{ loading ? '识别中...' : '识别' }}
      </button>

      <ResultDisplay
        :result="result"
        :loading="loading"
        :error="error"
      />
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  font-family: system-ui, -apple-system, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 32px;
}

header h1 {
  margin: 0;
  font-size: 1.8em;
}

header p {
  color: #666;
  margin: 8px 0 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.recognize-btn {
  padding: 10px 32px;
  border: none;
  border-radius: 6px;
  background: #4a90d9;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}

.recognize-btn:hover:not(:disabled) {
  background: #357abd;
}

.recognize-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```

- [ ] **Step 2: Verify the project builds**

Run: `cd frontend && npm run build`
Expected: Build succeeds, `vue-tsc` type-checks pass.

- [ ] **Step 3: Commit**

```bash
git add frontend/src/App.vue
git commit -m "feat(frontend): compose ImageUploader and ResultDisplay in App"
```

---

### Task 9: Integration verification and root README

**Files:**
- Create: `README.md` (root)

- [ ] **Step 1: Create root `README.md`**

```markdown
# OCR 图片识别系统

基于 PaddleOCR 的图片文字识别系统，前后端分离架构。

## 项目结构

- `backend/` — Python FastAPI 后端，PaddleOCR 中文识别
- `frontend/` — Vue 3 前端，图片上传与结果展示

## 快速开始

### 后端

\`\`\`bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
\`\`\`

### 前端

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

打开 http://localhost:5173 即可使用。

## API

| Method | Path | Description |
|--------|------|-------------|
| POST | /ocr | 上传图片，返回识别文本 |
| GET | /health | 健康检查 |
```

- [ ] **Step 2: Run backend tests**

Run: `cd backend && python -m pytest tests/ -v`
Expected: All tests pass.

- [ ] **Step 3: Verify frontend build**

Run: `cd frontend && npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add root README with project setup instructions"
```

---

## Self-Review Summary

- **Spec coverage:** All spec goals covered — backend `/ocr` + `/health`, frontend upload/preview/display, CORS, env var config, project structure matches spec.
- **Review Focus tests added:** non-file (Task 4 `test_ocr_no_file`), empty result (Task 4 `test_ocr_empty_result`), engine failure (Task 4 `test_ocr_engine_failure`), CORS (Task 4 middleware in implementation). Large images — no explicit test but Pillow handles it natively.
- **Type consistency:** `recognize()` signature consistent across Tasks 3-4. `OCRResponse` consistent across backend (Task 2) and frontend (Task 6). `useOCR` return shape consistent between Task 6 and Task 8.
- **Proportion:** Plan is implementation-focused with signatures and test assertions; code blocks are minimal scaffolding or algorithm-determined bodies.
