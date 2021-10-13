import React, { useCallback } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { IconButton, Typography } from '@mui/material'
import { Edit, ShoppingCart } from '@mui/icons-material'
import { Link, useHistory } from 'react-router-dom'
import { routes } from 'router/routes'

const EditButton = ({ row }) => {
  const uuid = row.uuid
  return (
    <Link
      to={routes.admin.shops.settings(uuid)}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton color="success">
        <Edit />
      </IconButton>
    </Link>
  )
}

const ProductsButton = ({ row }) => {
  const uuid = row.uuid
  return (
    <Link
      to={routes.admin.shops.products(uuid)}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton color="success">
        <ShoppingCart />
      </IconButton>
    </Link>
  )
}

const SelfPickup = ({ row }) => {
  const isSelfPickupAvailable = row.settings?.selfPickaping
  return (
    <Typography variant="body2">
      {isSelfPickupAvailable ? 'Присутній' : 'Немає'}
    </Typography>
  )
}

const columns = [
  {
    field: 'shopNumber',
    headerName: '№',
    width: 80,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'uuid',
    headerName: 'ID',
    width: 80,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'address',
    headerName: 'Адреса',
    width: 200,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'deliveryRadius',
    headerName: 'Радіус (м)',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    valueGetter: ({ row }) => row.settings.deliveryRadius
  },
  {
    field: 'maxWeight',
    headerName: 'Макс Вага (кг)',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    valueGetter: ({ row }) => row.settings.maxWeight
  },
  {
    field: 'isSelfPickupAvailable',
    headerName: 'Самовивіз',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: SelfPickup
  },
  {
    field: 'edit',
    headerName: 'Налаштування',
    width: 150,
    align: 'center',
    headerAlign: 'center',
    renderCell: EditButton
  },
  {
    field: 'products',
    headerName: 'Продукти',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: ProductsButton
  }
]

export const ShopsTable = ({ shops }) => {
  const history = useHistory()
  const navigateToShop = useCallback(
    ({ row }) => history.push(routes.admin.shops.shop(row.uuid)),
    [history]
  )

  return (
    <DataGrid
      rows={shops}
      onRowClick={navigateToShop}
      columns={columns}
      getRowId={(row) => row.uuid}
      pageSize={50}
      rowsPerPageOptions={[15, 25, 50]}
      pagination
      disableSelectionOnClick
    />
  )
}
