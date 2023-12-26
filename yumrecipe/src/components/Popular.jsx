import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/splide.min.css';

function Popular() {
  const [popular, setPopular] =useState([]);

  useEffect(() => {
    getPopular();

  },[]);

  const getPopular = async () => {
    try{
      const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      setPopular(data.recipes);
      console.log('Data:', data);

  } catch (error) {
      console.error('Error:', error);
  }
};

return (
  <div>
    <Wrapper>
      <h3>Popular Picks</h3>

      <Splide>
      {popular && popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card >
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
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

img{
  border-radius: 2rem;
}
`;
export default Popular;