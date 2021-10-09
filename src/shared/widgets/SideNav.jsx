import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { DoorBack } from '@mui/icons-material'

export const SideNav = ({ isOpen, onClose, onLogout }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Box
        sx={{ width: '25%', minWidth: 320, maxWidth: 480 }}
        role="presentation"
      >
        <List>
          <ListItem button onClick={onLogout}>
            <ListItemIcon>
              <DoorBack />
            </ListItemIcon>
            <ListItemText primary="Вийти" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
