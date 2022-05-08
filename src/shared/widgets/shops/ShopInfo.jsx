import React, { useCallback } from 'react'
import { Stack, Typography, Card, Button } from '@mui/material'
import { styled } from '@mui/system'
import { routes } from 'router/routes'
import { useHistory } from 'react-router'

const Item = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  borderBottom: `1px solid ${theme.palette.primary.dark}`
}))

const Footer = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  width: '100%',
  display: 'flex'
}))

const Container = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2)
}))

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1)
}))

const Value = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginLeft: theme.spacing(1)
}))

const Title = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

export const ShopInfo = ({ shop }) => {
  const history = useHistory()
  const { settings, uuid } = shop
  const isSelfPickupAvailable = settings?.selfPickaping

  const navigateToSettings = useCallback(
    () => history.push(routes.admin.shops.settings(uuid)),
    [history, uuid]
  )

  const navigateToProducts = useCallback(
    () => history.push(routes.admin.shops.products(uuid)),
    [history, uuid]
  )

  return (
    <Container>
      <Stack spacing={1}>
        <Item>
          <Title variant="h3">Номер магазину:</Title>
          <Value variant="body1">{shop.shopNumber}</Value>
        </Item>
        <Item>
          <Title variant="h3">ID магазину:</Title>
          <Value variant="body1">{shop.uuid}</Value>
        </Item>
        <Item>
          <Title variant="h3">Адреса магазину:</Title>
          <Value variant="body1">{shop.address}</Value>
        </Item>
        <Item>
          <Title variant="h3">Самовивіз:</Title>
          <Value variant="body1">
            {isSelfPickupAvailable ? 'Присутній' : 'Немає'}
          </Value>
        </Item>
        <Item>
          <Title variant="h3">Радіус доставки:</Title>
          <Value variant="body1">{shop.settings.deliveryRadius}m</Value>
        </Item>
        <Item>
          <Title variant="h3">Максимальна вага замовлення:</Title>
          <Value variant="body1">{shop.settings.maxWeight}кг</Value>
        </Item>
      </Stack>
      <Footer>
        <NavButton
          variant="contained"
          color="secondary"
          onClick={navigateToSettings}
        >
          Налаштування
        </NavButton>
        <NavButton
          variant="contained"
          color="secondary"
          onClick={navigateToProducts}
        >
          Продукти
        </NavButton>
      </Footer>
    </Container>
  )
}
