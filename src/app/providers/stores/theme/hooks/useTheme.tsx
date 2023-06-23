import { useThemeStore } from '../lib/useThemeStore'
import { Theme } from '../types/theme'

const LOCAL_STORAGE_THEME_KEY = 'theme'

export const useTheme = () => {
  const { theme, setTheme } = useThemeStore((state) => state)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
