import React from 'react';
import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';

const CardContainer = styled.div`
  background-color: #bea96cff;
  color: #333;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  max-width: 350px;
  text-align: left;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a38e61ff;
    
  }

`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: white;
  border-top: 1px solid #ddd;
  padding-top: 1rem;

`;


const InfoTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

`;

function SessionCard({ session }) {
  return (

    <CardContainer>
      <CardTitle>{session.title}</CardTitle>
      <CardDescription>{session.description}</CardDescription>
      <CardFooter>
        <InfoTag>
          <FaUserFriends />
          <span><strong>{session.players} jogadores</strong></span>
        </InfoTag>
      </CardFooter>
    </CardContainer>
    
  );
}

export default SessionCard;