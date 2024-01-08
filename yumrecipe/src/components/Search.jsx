import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Input:', input);
    navigate('/searched/' + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch className="search-icon" />
        <input 
          id ="searchInput"
          name="searchInput"
          onChange={(e) => setInput(e.target.value)}
          type="text" 
          value={input} 
          />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  position: relative;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 10px; /* Adjust this value as needed */
    transform: translateY(-50%);
    color: white; /* Set the icon color */
  }
`;

export default Search;
