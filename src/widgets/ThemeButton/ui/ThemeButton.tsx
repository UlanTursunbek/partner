import { useTheme } from 'app/providers/stores/theme/index.tsx'
import { IconThemeDark, IconThemeLight } from 'shared/assets/Icons/index.tsx'
import { ButtonIcon } from 'shared/ui/ButtonIcon/index.tsx'

interface ThemeButtonProps {}

export const ThemeButton = ({}: ThemeButtonProps) => {
  const { globalTheme, toggleTheme } = useTheme()

  return (
    <ButtonIcon onClick={toggleTheme}>
      {globalTheme === 'light' ? <IconThemeLight /> : <IconThemeDark />}
    </ButtonIcon>
  )
}
