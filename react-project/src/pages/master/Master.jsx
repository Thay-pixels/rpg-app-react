import styled from 'styled-components';
import Button from '../../components/Button';
import UserProfileCard from '../../components/UserProfileCard';
import HeaderMaster from '../../components/HeaderMaster';
import Footer from '../../components/Footer';
import avatarUser from '../../assets/UserIcon.png';
import Subtitle from '../../components/Subtitle';
import SessionList from '../../components/SessionList';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*height: 100vh;*/
  text-align: center;
  padding-top: 5px;
`;

//Dados estáticos de mestre e sessao apenas para desmonstracao.
const masterData = {
  name: 'Robin Winters',
  username: 'RobinButNotHood',
  email: 'robin.winters@gmail.com',
  imageUrl: avatarUser,
  sessoesCriadas: 4,
};

const masterSessions = [
  { id: 1, title: 'O ruido da Morte', description: 'Um som estranho ecoa das montanhas; quem será o corajosao a enfrentar?', players: 5, system: 'D&D 5e' },
  { id: 2, title: 'A Profecia', description: 'Palavras ecoam no vento,  o que elas significam?', players: 5, system: 'D&D 5e' },
];

const Master = () => {
  return (

  <>

  <HeaderMaster/>

  <Subtitle>Gerencie as suas aventuras.</Subtitle>

  <Container>
      
    <UserProfileCard data={masterData} />

    <div>
      <Button onClick={() => alert('Crie sessões.')}>
        + CRIAR SESSÃO
      </Button>
    </div>

    <div>
      <Button onClick={() => alert('Veja suas sessões.')}>
        + VER SESSÕES
      </Button>
    </div>

    <div>
      <SessionList title="Minhas Sessões" sessions={masterSessions} />
    </div>

  </Container>

  <Footer/>

  </>

  );
};

export default Master;