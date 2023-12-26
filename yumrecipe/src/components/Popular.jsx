import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"; 
// import '../../src/splide-default.min.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);

      if (!api.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await api.json();
      setPopular(data.recipes);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  // Initialize Splide with some basic settings
  const splideOptions = {
    type: 'slide', // Set to 'fade' if you want a fade effect
    heightRatio: 0.5, // Adjust the slider height as needed
    pagination: false, // Set to true if you want pagination
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide options={splideOptions}>
          {popular && popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} onError={(e) => console.error('Image error:', e)} />
              </Card>
            </SplideSlide>
            ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    max-width: 100%; // Set the maximum width for the image
    max-height: 15rem; // Set the maximum height for the image
    object-fit: cover;
  }
`;

export default Popular;