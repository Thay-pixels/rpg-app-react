import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import logoImage from '../assets/ScriptumLogo.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #453d36ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  /*Media Query para telas pequena s (ela foi usada como geral para as telas menores, porem em algumas fica meio estranho).*/
  @media (max-width: 768px) {
    flex-direction: column;
    position: static;
    gap: 1rem;
  }

`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;

`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  
`;

function Header() {
  return (
    <HeaderContainer>
      
      <Link to="/">
        <LogoImage src={logoImage} alt="ScriptumLogo.png" />
      </Link>
      

      <ButtonGroup>
        <Link to="/login">
          <Button>Login</Button>
        </Link>

        <Link to="/register">
          <Button>Cadastre-se</Button>
        </Link>

        <Link to="/master">
          <Button>Mestre Page</Button>
        </Link>

        <Link to="/player">
          <Button>Player Page</Button>
        </Link>
        
      </ButtonGroup>
      
    </HeaderContainer>
  );
}

export default Header;