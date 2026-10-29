import { ref, watch } from 'vue'

export interface AppSettings {
  similarityThreshold: number
}

const STORAGE_KEY = 'app-settings'

const DEFAULT_SETTINGS: AppSettings = {
  similarityThreshold: 0.6,
}

function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_SETTINGS }
    const parsed = JSON.parse(raw)
    return { ...DEFAULT_SETTINGS, ...parsed }
  } catch {
    return { ...DEFAULT_SETTINGS }
  }
}

const settings = ref<AppSettings>(loadSettings())

watch(settings, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

export function useSettings() {
  function updateSettings(patch: Partial<AppSettings>): void {
    settings.value = { ...settings.value, ...patch }
  }

  function resetSettings(): void {
    settings.value = { ...DEFAULT_SETTINGS }
  }

  return { settings, updateSettings, resetSettings }
}
