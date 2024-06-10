// component/LetterForm.js
import React, { useState } from 'react'
import { TextField, Button, Grid, MenuItem, Card, CardContent, Typography } from '@mui/material'

const studyPrograms = [
  'Informatika',
  'Pengarian',
  'Elektro',
  'Arsitektur',
  'PWK'
]

const LetterForm = () => {
  const [source, setSource] = useState('')
  const [studyProgram, setStudyProgram] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Source:', source)
    console.log('Study Program:', studyProgram)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Input Surat
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Sumber Surat"
                fullWidth
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Prodi"
                fullWidth
                value={studyProgram}
                onChange={(e) => setStudyProgram(e.target.value)}
                required
              >
                {studyPrograms.map((program) => (
                  <MenuItem key={program} value={program}>
                    {program}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default LetterForm
