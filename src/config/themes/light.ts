'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
	palette: {
    mode: 'light',
    primary: {
      main: '#20201f'
    },
    text: {
      primary: '#1C1B1B'
    }
  },
  typography: {
    fontFamily: 'inherit'
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.02), 0px 0px 0px 1px rgba(27, 31, 35, 0.15)',
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ],
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        disableElevation: true
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        color: 'primary'
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#ececec'
        }
      }
    }
  }
})

export const light = responsiveFontSizes( theme )

