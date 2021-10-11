import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { IconButton, Typography } from '@mui/material'
import { Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { routes } from 'router/routes'

const EditButton = ({ row }) => {
  const shopNumber = row.shopNumber
  return (
    <Link to={routes.admin.shops.shop(shopNumber)}>
      <IconButton color="success">
        <Edit />
      </IconButton>
    </Link>
  )
}

const SelfPickup = ({ row }) => {
  const isSelfPickupAvailable = row.settings?.selfPickaping
  return (
    <Typography variant="body1">
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
    field: 'isSelfPickupAvailable',
    headerName: 'Самовивіз',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    renderCell: SelfPickup
  },
  {
    field: 'edit',
    headerName: '',
    width: 80,
    align: 'center',
    headerAlign: 'center',
    renderCell: EditButton
  }
]

export const ShopsTable = ({ shops }) => {
  return (
    <DataGrid
      rows={shops}
      columns={columns}
      getRowId={(row) => row.uuid}
      pageSize={50}
      rowsPerPageOptions={[15, 25, 50]}
      pagination
      disableSelectionOnClick
    />
  )
}
