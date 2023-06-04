import { createGlobalTheme, fontFace } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    '1/2': '50%',
    '1/5': '20%'
  },
  //   color: {
  //     white: '#fff',
  //     black: '#000',
  //     orange: '#FFA500',
  //     primary: '#764abc'
  //   },
  fontFamily: {},
  fontSize: {
    small: '8px',
    medium: '16px',
    large: '24px'
  },
  gridRepeat: {
    '4x': 'repeat(4, 1fr)'
  },
  border: {
    gray: '1px solid gray',
    active: '1px solid blue',
    black: '1px solid black'
  },
  width: {
    320: '320px',
    full: '100%',
    fullScreen: '100vw'
  },
  height: {
    full: '100%',
    fullScreen: '100vh'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  },
  bgColor: {
    primary: '#000',
    transparent: 'transparent'
  },
  color: {
    primary: '#fff',
    secondary: '#000'
  }
})
