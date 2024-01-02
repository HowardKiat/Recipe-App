import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


function Cuisine() {

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cusine=${name}&number=12`)
  }

  return (
    <div>
      
    </div>
  )
}

export default Cuisine