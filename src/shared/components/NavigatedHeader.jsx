import React from 'react'
import { IconButton } from '@mui/material'
import { styled } from '@mui/system'
import { Header } from './Header'
import { ArrowBack } from '@mui/icons-material'

const BackIcon = styled(ArrowBack)({
  fontSize: '2rem'
})

const GoBackButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2)
}))

export const NavigatedHeader = ({ children, onIconClick }) => {
  return (
    <Header>
      <GoBackButton onClick={onIconClick}>
        <BackIcon />
      </GoBackButton>
      {children}
    </Header>
  )
}
