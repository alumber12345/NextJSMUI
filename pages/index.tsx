import { AppBar, Toolbar, Typography, Container, Card, CardActionArea, CardContent, CardMedia, Grid, Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Slider from 'react-slick';
import BookingForm from '../components/bookingForm';

type Destination = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
};
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', 
  height: '400px'
}
const topDestinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
    description: 'Explore the city of lights and its enchanting charm.',
  },
  {
    id: '2',
    name: 'Maldives',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvB1qL_KRsane07fOqTzKZR01Sfsn3C99CA&usqp=CAU',
    description: 'Experience the tropical paradise with white-sand beaches.',
  },
  {
    id: '3',
    name: 'Kyoto',
    imageUrl: 'https://unseen-japan.com/wp-content/uploads/2023/09/pixta_71745912_M.jpg',
    description: 'Discover the history and culture of this ancient Japanese city.',
  },
];
const slideImages = [
  {
    url: 'https://media.istockphoto.com/id/165174232/photo/farmland-with-farmhouse-and-grazing-cows-in-the-uk.jpg?s=612x612&w=0&k=20&c=l8d7EUKBjoJKt9wt7-mn-DVQvbExnIeI7YZFLl4kWek=',
    
  },
  {
    url: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/9AEA/production/_129285693_gettyimages-853983104.jpg',
    
  },
  {
    url: 'https://www.shutterstock.com/image-photo/valletta-malta-skyline-marsans-harbour-600nw-784703227.jpg',
    
  },
];

const Home: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Box position="relative" zIndex="slider">
        <Slider {...settings}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </Box>

        <Container maxWidth="lg" style={{ marginTop: '20px' }}>
          <div style={{ margin: '20px 0' }} />
        <BookingForm />
      </Container>
      <Container maxWidth="lg" className={styles.main}>
        <Typography variant="h4" component="h1" gutterBottom>
          Top Destinations
        </Typography>
        <Grid container spacing={4}>
          {topDestinations.map((destination) => (
            <Grid item key={destination.id} xs={12} sm={6} md={4}>
              <Card className={styles.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={destination.imageUrl}
                    alt={destination.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {destination.name}
                    </Typography>
                    <Box className={styles.cardDescription}>
                      <Typography variant="body2" color="text.secondary">
                        {destination.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;