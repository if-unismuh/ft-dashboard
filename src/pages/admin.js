// pages/admin.js
import React, { useState } from 'react'
import { Card, CardContent, Typography, Button, Grid } from '@mui/material'

const mockData = [
  {
    id: 1,
    namaMahasiswa: 'John Doe',
    nim: '123456789',
    jenisKelamin: 'Laki-laki',
    ttl: 'Makassar, 01-01-2000',
    prodi: 'Informatika',
    universitas: 'Universitas Muhammadiyah Makassar',
    semester: '6',
    tahunAkademik: '2023/2024',
    alamat: 'Jl. ABC No. 123'
  },
  {
    id: 2,
    namaMahasiswa: 'Jane Smith',
    nim: '987654321',
    jenisKelamin: 'Perempuan',
    ttl: 'Makassar, 02-02-2001',
    prodi: 'Pengarian',
    universitas: 'Universitas Muhammadiyah Makassar',
    semester: '4',
    tahunAkademik: '2023/2024',
    alamat: 'Jl. DEF No. 456'
  }
]

const AdminPage = () => {
  const [students, setStudents] = useState(mockData)

  const handleApproval = (id, status) => {
    // Update the student status in mock data (in a real app, you would send a request to the server)
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, status } : student
    )
    setStudents(updatedStudents)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Admin: Cek Kelengkapan Berkas
        </Typography>
        {students.map((student) => (
          <Grid container spacing={3} key={student.id} style={{ marginBottom: '20px' }}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Nama Mahasiswa: {student.namaMahasiswa}
              </Typography>
              <Typography variant="body1" gutterBottom>
                NIM: {student.nim}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Jenis Kelamin: {student.jenisKelamin}
              </Typography>
              <Typography variant="body1" gutterBottom>
                TTL: {student.ttl}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Prodi: {student.prodi}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Universitas: {student.universitas}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Semester: {student.semester}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tahun Akademik: {student.tahunAkademik}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Alamat: {student.alamat}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleApproval(student.id, 'berhasil')}
                style={{ marginRight: '10px' }}
              >
                Berhasil
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleApproval(student.id, 'tidak berhasil')}
              >
                Tidak Berhasil
              </Button>
            </Grid>
          </Grid>
        ))}
      </CardContent>
    </Card>
  )
}

export default AdminPage
