import React, { useCallback } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export const TopNav = ({ onLogout, onMenuToggle, isMenuOpen = false }) => {
  const handleMenuToggle = useCallback(() => {
    onMenuToggle && onMenuToggle(!isMenuOpen)
  }, [onMenuToggle, isMenuOpen])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={onLogout}>
            Вийти
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
