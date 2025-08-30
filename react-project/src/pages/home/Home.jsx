import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeImage from '../../components/HomeImage';
import homeImage from '../../assets/HomeMasterImage.png';
import homeImageK from '../../assets/HomeKnightImage.png';
import Button from '../../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*height: 100vh;*/
  text-align: center;
  background-color: #1b1918ff;
  color: white;
  padding-top: 100px;

  @media (max-width: 768px) {
    font-size: 1rem;

`;

const Home = () => {
  return (

    <>

    <Header/>

    <Container>

    <div>
      <Title>Torne seu mundo real</Title>
    </div>

    <HomeImage src={homeImage} alt="Ilustração de Mestre com um livro contendo uma sessão." />

    <div>
      <Subtitle>Coloque no papel suas ideias mais emocionantes e faça parte de jornadas e aventuras extraordinárias com personagens e universos únicos.</Subtitle>
    </div>

    <div>
      <Title>Faça parte de diferentes universos</Title>
    </div>

    <HomeImage src={homeImageK} alt="Ilustração de Cavaleiro." />

    <div>
      <Subtitle>Seja parte de diferentes histórias e veja como jogadores e mestres constroem e interpretam seus mundos e personagens.</Subtitle>
    </div>

    <div>
      <p></p>
      <Subtitle>
        <Link to="/login">
          <Button>Faça o Login agora mesmo</Button>
        </Link>

      <p>ou</p>

        <Link to="/register">
          <Button>Cadastre-se</Button>
        </Link>
      </Subtitle>
    </div>
    
    </Container>

    <Footer/>

    </>
  );
};

export default Home;