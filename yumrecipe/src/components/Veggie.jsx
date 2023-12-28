import React from 'react'

function Veggie() {
  return (
    <div>
    <Wrapper>
      <h3>Popular Picks</h3>

      <Splide options={{
      // Like CSS for splides customizable
        perPage: 3,
        arrows: false,
        pagination: true,
        drag: 'free',
        gap: "5rem",
      }}
    >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} onError={(e) => console.error('Image loading error:', e)} />
              <Gradient />
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  </div>
  )
}

export default Veggie