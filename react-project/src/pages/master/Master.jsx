import styled from 'styled-components';
import CssGlobal from '../../components/CSSGlobal';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #f0f0f0;
`;

const Mestre = () => {
  return (
    <Container>
      <Title>Página do Mestre</Title>
      <p>Gerencie a aventura dos seus jogadores aqui.</p>
      <Link to="/">
        <Button>Voltar para o Início</Button>
      </Link>
    </Container>
  );
};

export default Mestre;