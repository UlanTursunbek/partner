import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const drawer = style({
  height: '100%',
  background: 'rgba(0,0,0,0.5)',
  position: 'fixed',
  top: '0',
  right: '0',
  width: '100%',
  zIndex: '200',
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 0.3s ease-out'
})

export const drawerOpen = style({
  opacity: 1,
  visibility: 'visible'
})

export const menu = style({
  height: '100%',
  background: 'white',
  position: 'fixed',
  top: '0',
  right: '0',
  width: vars.width[320],
  zIndex: '200',
  transform: 'translateX(100%)',
  transition: 'transform 0.3s ease-out',
  padding: vars.space.medium
})

export const menuOpen = style({
  transform: 'translateX(0)'
})
