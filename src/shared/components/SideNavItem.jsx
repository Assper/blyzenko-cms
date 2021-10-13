import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { styled } from '@mui/system'

const Title = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.secondary.main
}))

export const SideNavItem = ({ onClick, title, icon }) => {
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <Title primary={title} />
    </ListItem>
  )
}
