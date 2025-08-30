import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Title from './Title';
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

function HeaderPlayer() {
  return (
    <HeaderContainer>
      
      <Link to="/">
        <LogoImage src={logoImage} alt="ScriptumLogo.png" />
      </Link>

      <Title>Página do Jogador</Title>
      
      <ButtonGroup>
        <Link to="/">
          <Button>Voltar para Página Inicial</Button>
        </Link>

        <Link>
          <Button>Encerrar Sessão</Button>
        </Link>
        
      </ButtonGroup>
      
    </HeaderContainer>
  );
}

export default HeaderPlayer;