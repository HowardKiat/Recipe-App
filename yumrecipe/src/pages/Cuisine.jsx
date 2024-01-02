import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


function Cuisine() {
  const [cuisine,  setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`);
      const recipes = await data.json();
      setCuisine(recipes.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // getCuisine('italian')
    console.log(params.type);
  },[params.type]);

  return (
    <div>
      
    </div>
  )
}

export default Cuisine