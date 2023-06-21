import { createGlobalTheme } from '@vanilla-extract/css'

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
    black: '1px solid black',
    brick: '3px solid red'
  },
  width: {
    0: '0px',
    320: '320px',
    full: '100%',
    fullScreen: '100vw',
    sidebar: '64px',
    sidebarActive: '128px'
  },
  height: {
    full: '100%',
    fullScreen: '100vh',
    navbar: '64px'
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
    secondary: '#000',
    link: 'blue',
    linkHover: 'darkgreen'
  },
  shadow: {
    bottom: '0px 2px 10px 0px rgba(0, 0, 0, 0.2)',
    right: '10px 0px 10px -10px rgba(0, 0, 0, 0.2)',
    full: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  },
  zindex: {
    0: '0',
    1: '1',
    10: '10'
  }
})
