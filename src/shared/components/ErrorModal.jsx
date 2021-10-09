import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const ErrorModal = ({ onClose, isOpen, message }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onClose}
      fullWidth
      aria-labelledby="error-modal-title"
    >
      <DialogTitle id="error-modal-title">Помилка</DialogTitle>
      <DialogContent>
        <DialogContentText color="error">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="secondary">
          Добре
        </Button>
      </DialogActions>
    </Dialog>
  )
}
