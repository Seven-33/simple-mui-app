import { useNavigate } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import Image from 'mui-image';
import PageLayout from '../../components/PageLayout';

const PostImage = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0);
  };

  return (
    <PageLayout>
      <Container>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="https://picsum.photos/600/600"
            width="600px"
            height="600px"
            fit="cover"
            duration={3000}
            easing="cubic-bezier(0.7, 0, 0.6, 1)"
            showLoading
            errorIcon
            shift="bottom"
            distance="200px"
            shiftDuration={1000}
            bgColor="inherit"
            sx={{
              mb: 6,
              borderRadius: 4,
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mb: 3, width: '160px' }}
            onClick={handleReload}
          >
            Reload
          </Button>
          <Button variant="contained" color="primary" sx={{ width: '160px' }}>
            Post
          </Button>
        </Box>
      </Container>
    </PageLayout>
  );
};

export default PostImage;
