import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);
        
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details && details.image} alt="" />
        </div>
        <Info>
            <Button 
                className={activeTab === 'instructions' ? 'active' : ''} 
                onClick={() => setActiveTab("instructions")}>Instructions
            </Button>
            <Button 
                className={activeTab === 'ingredients' ? 'active' : ''}
                onClick={() => setActiveTab("ingredients")}>Ingredients
            </Button>
            {activeTab === "instructions" && (            
                <div>
                    <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                    <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                </div>
            )}

            {activeTab === "ingredients" && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => (
                        <li key = {ingredient.id}>{ingredient.original}</li>
                        ))}
                </ul>
            )};
        </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(45deg, #FEB2A8, #FFD194, #FFFFFF);
        color: #333; 
    }    

    h2 {
        margin-bottom: 2rem;
    }

    ul {
        margin-top: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: black;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;
export default Recipe
