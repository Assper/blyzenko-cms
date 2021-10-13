import React, { useCallback } from 'react'
import { List, Drawer, Box } from '@mui/material'
import { SideNavItem } from 'shared/components/SideNavItem'
import { DoorBack, Store } from '@mui/icons-material'
import { useHistory } from 'react-router'
import { routes } from 'router/routes'
import { styled } from '@mui/system'

const Items = styled(List)(({ theme }) => ({
  background: theme.palette.primary.main
}))

export const SideNav = ({ isOpen, onClose, onLogout }) => {
  const history = useHistory()
  const navigateTo = useCallback(
    (route) => () => history.push(route),
    [history]
  )

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Box
        sx={{ width: '25%', minWidth: 320, maxWidth: 480 }}
        role="presentation"
      >
        <Items>
          <SideNavItem
            onClick={navigateTo(routes.admin.shops.base)}
            title="Магазини"
            icon={<Store color="secondary" />}
          />
          <SideNavItem
            onClick={onLogout}
            title="Вийти"
            icon={<DoorBack color="secondary" />}
          />
        </Items>
      </Box>
    </Drawer>
  )
}
