import { Box, Typography } from '@mui/material';

const InfoComponent = () => {
  return (
    <Box
      sx={{
        color: 'black',
        backgroundColor: '#b3e5fc',
        textAlign: 'center',
        px: '1rem',
        py: '0.5rem'
      }}
    >
      <Typography variant="subtitle1" component={'p'}>
        Thúc đẩy công việc của bạn với
        <Typography
          variant="subtitle1"
          component={'span'}
          sx={{
            color: '#311b92',
            fontWeight: 600,
            paddingX: '0.2rem'
          }}
        >
          Quản lí công việc 🚀
        </Typography>
      </Typography>
    </Box>
  );
};

export default InfoComponent;
