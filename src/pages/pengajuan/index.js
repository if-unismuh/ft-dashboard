// components/FormPengajuanPage.js
import React, { useState } from 'react'
import { TextField, Button, Grid, MenuItem, Card, CardContent, Typography } from '@mui/material'

const studyPrograms = [
  'Informatika',
  'Pengarian',
  'Elektro',
  'Arsitektur',
  'PWK'
]

const FormPengajuanPage = () => {
  const [formData, setFormData] = useState({
    namaMahasiswa: '',
    nim: '',
    jenisKelamin: '',
    ttl: '',
    prodi: '',
    universitas: 'Universitas Muhammadiyah Makassar',
    semester: '',
    tahunAkademik: '',
    alamat: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Form Pengajuan Surat Aktif Kuliah
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Nama Mahasiswa"
                fullWidth
                name="namaMahasiswa"
                value={formData.namaMahasiswa}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="NIM"
                fullWidth
                name="nim"
                value={formData.nim}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Jenis Kelamin"
                fullWidth
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleChange}
                required
              >
                <MenuItem value="Laki-laki">Laki-laki</MenuItem>
                <MenuItem value="Perempuan">Perempuan</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tempat dan Tanggal Lahir (TTL)"
                fullWidth
                name="ttl"
                value={formData.ttl}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Prodi"
                fullWidth
                name="prodi"
                value={formData.prodi}
                onChange={handleChange}
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
              <TextField
                label="Universitas"
                fullWidth
                name="universitas"
                value={formData.universitas}
                onChange={handleChange}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Semester"
                fullWidth
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tahun Akademik"
                fullWidth
                name="tahunAkademik"
                value={formData.tahunAkademik}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Alamat"
                fullWidth
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                required
              />
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

export default FormPengajuanPage
