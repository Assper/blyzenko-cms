import React from 'react'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'

const H1 = styled(Typography)(({ theme }) => ({
  margin: `${theme.spacing(2)} 0`
}))

export const Header = ({ children }) => {
  return <H1 variant="h1">{children}</H1>
}
