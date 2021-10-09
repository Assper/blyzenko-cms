import { Button } from '@mui/material'
import { styled } from '@mui/system'

export const SecondaryButton = styled(Button)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  margin: theme.spacing(1)
}))
