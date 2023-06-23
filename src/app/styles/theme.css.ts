import {
  createGlobalTheme,
  createTheme,
  createThemeContract
} from '@vanilla-extract/css'

const root = createGlobalTheme('*', {
  margin: '0',
  padding: '0',
  fontFamily: 'Montserrat'
})

export const globalColors = createThemeContract({
  brand: null,
  secondary: null,
  base: null,
  text: null
})

export const lightTheme = createTheme(globalColors, {
  brand: '#162838',
  secondary: '#cc1d5e',
  base: '#ffffff',
  text: '#666666'
})

export const darkTheme = createTheme(globalColors, {
  brand: 'red',
  secondary: 'red',
  base: 'red',
  text: 'red'
})
