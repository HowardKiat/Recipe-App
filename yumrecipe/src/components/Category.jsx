// Check out react icons for more icon inputs
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
        <SLink to={'cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 5rem;
    text-decoration: none;
    background: linear-gradient(to right, #c0c0c0, #d9d9d9);
    width: 6rem;
    height: 6rem;
    transform: scale(1.2);
    cursor: pointer;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.5);
      background: linear-gradient(to right, #FFB6C1, #ADD8E6);
    }
  
    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #DB7093, #87CEEB);
        transition: transform 0.3s ease-in-out;
        transform: scale(1.2);
      }
`;
export default Category