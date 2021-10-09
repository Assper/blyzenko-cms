import React from 'react'
import { LoginContainer } from 'shared/containers/LoginContainer'
import { Avatar, Container } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { styled } from '@mui/system'

const Header = styled(Avatar)(({ theme }) => ({
  margin: '0 auto',
  backgroundColor: theme.palette.warning.secondary
}))

const Content = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3)
}))

export const Login = () => {
  return (
    <Content>
      <Header>
        <LockOutlined />
      </Header>
      <LoginContainer />
    </Content>
  )
}
