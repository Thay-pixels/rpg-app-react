import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mestre from './pages/master/Master';
import Player from './pages/player/Player';
import styled from 'styled-components';
import Button from './components/Button';

const ContainerPrincipal = styled.div`
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <ContainerPrincipal>
              <Title>Escolha seu Perfil</Title>
              <div>
                <Link to="/mestre">
                  <Button>Mestre</Button>
                </Link>
                <Link to="/player">
                  <Button>Jogador</Button>
                </Link>
              </div>
            </ContainerPrincipal>
          } 
        />
        <Route path="/mestre" element={<Mestre />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  );
};

export default App;