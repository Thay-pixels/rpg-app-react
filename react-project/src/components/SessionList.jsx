import React from 'react';
import styled from 'styled-components';
import SessionCard from './SessionCard';

const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  padding: 0 1rem;
`;

const ListTitle = styled.h2`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid #453d36ff;
  padding-bottom: 1rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

function SessionList({ title, sessions }) {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <CardGrid>
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </CardGrid>
    </ListContainer>
  );
}

export default SessionList;