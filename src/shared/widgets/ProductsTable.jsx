import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

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
  }
]

export const ProductsTable = ({ products }) => {
  return (
    <DataGrid
      rows={products}
      columns={columns}
      getRowId={(row) => row.uuid}
      pageSize={50}
      rowsPerPageOptions={[15, 25, 50]}
      pagination
      disableSelectionOnClick
    />
  )
}
