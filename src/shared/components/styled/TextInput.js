import { TextField } from '@mui/material'
import { styled } from '@mui/system'

export const TextInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  margin: theme.spacing(1)
}))
