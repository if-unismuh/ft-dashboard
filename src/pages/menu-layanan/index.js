// pages/menu-layanan.js
import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router'

const MenuLayananPage = () => {
  const router = useRouter()

  const handleSelectPersuratan = () => {
    router.push('/form-pengajuan')
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Menu Layanan
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSelectPersuratan}>
          Menu Persuratan
        </Button>
      </CardContent>
    </Card>
  )
}

export default MenuLayananPage
