import { useTheme } from 'app/providers/stores/theme/index.tsx'
import { IconThemeDark, IconThemeLight } from 'shared/assets/Icons/index.tsx'
import { ButtonIcon } from 'shared/ui/ButtonIcon/index.tsx'

interface ThemeButtonProps {}

export const ThemeButton = ({}: ThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ButtonIcon onClick={toggleTheme}>
      {theme === 'light' ? <IconThemeLight /> : <IconThemeDark />}
    </ButtonIcon>
  )
}
