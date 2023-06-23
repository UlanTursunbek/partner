import { create } from 'zustand'

import { Theme } from '../types/theme'

interface IThemeStore {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

export const useThemeStore = create<IThemeStore>((set) => ({
  theme: Theme.LIGHT,
  setTheme: (newTheme) => set({ theme: newTheme })
}))
