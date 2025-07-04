import { Box, Typography } from '@mui/material';
import trianglesSrc from '../../assets/triangles.svg';
import productivitySrc from '../../assets/productivity.png';

const BottomComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          py: '3rem',
          px: '1rem',
          height: 'auto',
          width: '100%',
          backgroundImage: `url('${trianglesSrc}')`
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mx: {
              xs: '2em',
              sm: '5rem',
              md: '10rem',
              lg: '15rem',
              xl: '20rem'
            },
            textAlign: 'center'
          }}
        >
          Quản lí công việc giúp bạn tăng cường năng suất làm việc của
          mình.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mx: {
              xs: '2em',
              sm: '5rem',
              md: '10rem',
              lg: '15rem'
            },
            textAlign: 'center',
            lineHeight: { xs: '1rem', sm: '1.5rem' }
          }}
        >
          Tổ chức công việc, quản lý thời gian và tăng cường năng suất
          làm việc của bạn với Quản lí công việc.
        </Typography>
        <Box
          component="img"
          sx={{
            p: '0.5rem',
            height: 'auto',
            width: {
              sm: '15rem',
              md: '20rem',
              lg: '20rem',
              xl: '20rem'
            },
            display: { xs: 'none', sm: 'block' }
          }}
          src={productivitySrc}
          alt="productivity-img"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          py: '3rem',
          px: '2rem',
          height: 'auto',
          width: '100%'
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mx: {
              xs: '2em',
              sm: '5rem',
              md: '10rem',
              lg: '15rem',
              xl: '20rem'
            }
          }}
        >
          Bắt đầu hành trình quản lí công việc của bạn ngay hôm nay!
        </Typography>
      </Box>
    </>
  );
};

export default BottomComponent;
