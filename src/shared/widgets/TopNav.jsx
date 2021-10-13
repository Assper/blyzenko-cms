import React, { useCallback } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/system'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.secondary.main
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

export const TopNav = ({ onLogout, onMenuToggle, isMenuOpen = false }) => {
  const handleMenuToggle = useCallback(() => {
    onMenuToggle && onMenuToggle(!isMenuOpen)
  }, [onMenuToggle, isMenuOpen])

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
        <Button color="primary" onClick={onLogout}>
          Вийти
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  )
}
