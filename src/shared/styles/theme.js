import { ukUA } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'
import { Colors } from './colors'

const appTypography = {
  h1: {
    fontSize: 36,
    fontWeight: 600
  },
  h3: {
    fontSize: 22,
    fontWeight: 600
  },
  body1: {
    fontSize: 20,
    fontWeight: 400
  },
  body2: {
    fontSize: 16,
    fontWeight: 400
  },
  link: {
    fontSize: 20,
    fontWeight: 600
  }
}

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: Colors.PaperColor,
        light: Colors.White,
        dark: Colors.LightGray
      },
      secondary: {
        main: Colors.Green,
        light: Colors.LightGreen,
        dark: Colors.Green,
        contrastText: Colors.White
      },
      info: {
        main: Colors.LightGreen
      },
      error: {
        main: Colors.Red
      },
      warning: {
        main: Colors.Yellow,
        secondary: Colors.Orange
      }
    },
    typography: appTypography,
    shadows: [
      'none',
      '0px 4px 20px rgba(1, 25, 72, 0.1)',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  },
  ukUA
)
