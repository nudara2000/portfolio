import React, { useState } from 'react';
import styled from 'styled-components';

const Project = (props) => {
  const { img, disc ,git } = props.item;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Container className='project' onClick={toggleDescription}>
      <img src={img} alt='project' />
      <div className={`disc ${showDescription ? 'show' : ''}`}>
        <h1>Description</h1>
        <p>
          {disc} 
        </p>
        <div className='button'>
          <a href={git} target='_blank' rel='noopener noreferrer'><button>Source Code</button></a>
        </div>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    &.show {
      bottom: 0;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: green;
      }
    }
    button {
        padding: 0.3rem 0.3rem;
        margin-top: 3rem;
        cursor: pointer;
        border-radius: 0.3rem;
        background-color: #01be96;
        border: none;
        color: #fff;
        font-weight: 100;
        filter: drop-shadow(0px 10px 10px #01be9551);
        :hover {
          filter: drop-shadow(0px 10px 10px #01be9570);
        }
  }

  :hover > img {
    transform: scale(1.3);
  }
};
`