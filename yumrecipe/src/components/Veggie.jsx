import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css"; 
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    try {
      const check = localStorage.getItem('veggie');

      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
        
        if (!api.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await api.json();

        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
    <Wrapper>
      <h3>Veggie Picks</h3>

      <Splide options={{
      // Like CSS for splides customizable
        perPage: 4,
        arrows: false,
        pagination: true,
        drag: 'free',
        gap: "5rem",
      }}
    >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipe/" + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} onError={(e) => console.error('Image loading error:', e)} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    width: 100%
    height: 40%
    
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0));
`

export default Veggie