import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography
} from '@mui/material';
import { lightGreen, orange, teal } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function CardComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'start', sm: 'center' },
        alignItems: { xs: 'center', sm: 'center' },
        gap: { xs: '1rem', sm: '1rem', md: '2rem' },
        py: '3rem',
        mx: {
          xs: '2em',
          sm: '3rem',
          md: '5rem',
          lg: '8rem',
          xl: '12rem'
        }
      }}
    >
      <Card
        sx={{
          height: '16rem',
          width: '18rem',
          position: 'relative',
          borderRadius: '0.5rem'
        }}
      >
        <FolderIcon
          fontSize="large"
          sx={{
            color: orange[600],
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            padding: '0.2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem'
          }}
        />
        <CardHeader
          sx={{ backgroundColor: orange[600], height: '2.5rem' }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: '0.5rem' }}>
            Quản lí dự án
          </Typography>
          <Typography variant="subtitle2">
            Tổ chức các nhiệm vụ và buổi họp.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          height: '16rem',
          width: '18rem',
          position: 'relative',
          borderRadius: '0.5rem'
        }}
      >
        <AssignmentIcon
          fontSize="large"
          sx={{
            color: lightGreen[500],
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            padding: '0.2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem'
          }}
        />
        <CardHeader
          sx={{
            backgroundColor: lightGreen[500],
            height: '2.5rem'
          }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: '0.5rem' }}>
            Quản lí công việc
          </Typography>
          <Typography>
            Giúp bạn theo dõi công việc, phân công nhiệm vụ và quản lý
            thời gian hiệu quả.
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          height: '16rem',
          width: '18rem',
          position: 'relative',
          borderRadius: '0.5rem'
        }}
      >
        <LightbulbIcon
          fontSize="large"
          sx={{
            color: teal[500],
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            padding: '0.2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '0.5rem'
          }}
        />
        <CardHeader
          sx={{ backgroundColor: teal[500], height: '2.5rem' }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: '0.5rem' }}>
            Quản lí ý tưởng
          </Typography>
          <Typography variant="subtitle2">
            Lưu trữ và phát triển ý tưởng của bạn một cách hiệu quả.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CardComponent;
