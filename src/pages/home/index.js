// Home.js
import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardStaticFakultas from './component/CardStatic'
import DetailedLetterForm from './component/DetailedLetterForm'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardStaticFakultas />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <DetailedLetterForm />
      </Grid>
    </Grid>
  )
}

export default Home
