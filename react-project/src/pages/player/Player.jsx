import styled from 'styled-components';
import Button from '../../components/Button';
import UserProfileCard from '../../components/UserProfileCard';
import HeaderPlayer from '../../components/HeaderPlayer';
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

//Dados estáticos apenas para demonstração.
const playerData = {
  name: 'Dominique Holmes',
  username: 'dominnick_me',
  email: 'dominiqueholmes@gmail.com',
  imageUrl: avatarUser,
  exp: 1508,
};

const playerSessions = [
  { id: 1, title: 'O ruido da Morte', description: 'Um som estranho ecoa das montanhas; quem será o corajosao a enfrentar?', players: 5, system: 'D&D 5e' },
  { id: 2, title: 'A Profecia', description: 'Palavras ecoam no vento,  o que elas significam?', players: 5, system: 'D&D 5e' },
];

const Player = () => {
  return (

    <>

    <HeaderPlayer/>

    <Subtitle>Gerencie seu personagem.</Subtitle>

    <Container>

      <UserProfileCard data={playerData} />
      
    <div>
      <Button onClick={() => alert('Crie personagens aqui.')}>
        + CRIAR PERSONAGEM
      </Button>
    </div>

    <div>
      <Button onClick={() => alert('Veja suas sessões.')}>
        + VER PERSONAGENS
      </Button>
    </div>

    {/*<div>
      <SessionList title="Meus Personagens" sessions={playerSessions}/>
    </div>*/}

    <div>
      <SessionList title="Minhas Sessões" sessions={playerSessions}/>
    </div>

    </Container>

    <Footer/>

    </>

  );
};

export default Player;