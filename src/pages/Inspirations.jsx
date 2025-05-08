import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Stack,
} from '@mui/material';
import Inspo from '../components/Inspo';
import axios from 'axios';
import FloatingImage from '../components/FloatingImage';
const PEXELS_API_KEY = 'JOFw48zWgtaA40vvr4zfqParIHe5iZDKE5Br7dTBS4SsmAJeLCH5tyab'; 

const Inspirations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        params: {
          query: searchTerm,
          per_page: 12,
        },
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error('Error fetching images:', error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      fetchImages();
    }
  };

  return (
    <>    
      <FloatingImage />
      <Box
     height={'100vh'}
        p={4}
        sx={{
          background: 'linear-gradient(to right, #ffffff, #F8BBD0)',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dress Inspirations
        </Typography>

        <form onSubmit={handleSearch}>
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <TextField
              label="Search Dress Type"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Stack>
        </form>

        <Grid container spacing={2}>
          {images.map((img) => (
            <Grid item xs={12} sm={6} md={4} key={img.id}>
              <Inspo url={img.src.large} alt={img.photographer} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Inspirations;
