// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
// ** Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const data = [
  { pv: 2.00, name: '20181' },
  { pv: 0.10, name: '20182' },
  { pv: 0.50, name: '20191' },
  { pv: 0.80, name: '20192' },
  { pv: 3.00, name: '20201' },
  { pv: 1.10, name: '20202' },
  { pv: 2.30, name: '20211' },
  { pv: 1.50, name: '20212' },
  { pv: 2.00, name: '20221' },
  { pv: 2.30, name: '20222' },
  { pv: 3.70, name: '20231' },
  { pv: 3.00, name: '20232' },
  { pv: 3.50, name: '20241' },
  { pv: 3.80, name: '20242' }
]
const CustomTooltip = props => {
  // ** Props
  const { active, payload } = props
  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography sx={{ fontSize: theme => theme.typography.body2.fontSize }}>{`${payload[0].value}%`}</Typography>
      </div>
    )
  }
  return null
}

const RechartsLineChart = ({ direction }) => {
  return (
    <Card>
      <CardHeader
        title='Rata-Rata IPK Mahasiswa'
        subheader='Periode 2018-2024'
        subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.disabled} !important` } }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='h6' sx={{ mr: 5 }}>
              Fakultas Teknik
            </Typography>
            <CustomChip
              skin='light'
              color='success'
              sx={{ fontWeight: 500, borderRadius: 1, fontSize: theme => theme.typography.body2.fontSize }}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1 } }}>
                  <Icon icon='tabler:arrow-up' fontSize='1rem' />
                  <span>22%</span>
                </Box>
              }
            />
          </Box>
        }
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <LineChart height={350} data={data} style={{ direction }} margin={{ left: -20 }}>
              <CartesianGrid />
              <XAxis dataKey='name' reversed={direction === 'rtl'} />
              <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
              <Tooltip content={CustomTooltip} />
              <Line dataKey='pv' stroke='#4942E4' strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default RechartsLineChart
