import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Title from '../../components/Title';
import Text from '../../components/Text.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const FormWrapper = styled.div`
  background-color: #1b1918ff;
  padding: 30px;
  border-radius: 10px;
  border: solid 3px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-style: italic;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  return (

    <Container>

      <Form>

        <FormWrapper>

          <Title>Cadastre-se</Title>
          <Text>Digite seu Nome: </Text>
          <Input type="text" placeholder="Nome Completo..." />
          <Text>Digite seu Email: </Text>
          <Input type="email" placeholder="Digite seu E-mail..." />
          <Text>Digite sua Idade: </Text>
          <Input type="password" placeholder="EX: 25 anos..." />
          <Text>Digite seu Username: </Text>
          <Input type="text" placeholder="Digite seu Username..." />
          <Text>Pretende ser um Mestre Ou Jogador? </Text>
          <Input type="text" placeholder="" />

          <StyledLink to="/">
            <Button onClick={() => alert('alert')}>
              Criar Conta
            </Button>
          </StyledLink>


          <Text>
            Já tem uma conta?
            <strong><StyledLink to="/login">Entre</StyledLink></strong>
          </Text>

          <Text>
            <StyledLink to="/">Voltar para a Home</StyledLink>
          </Text>
          
        </FormWrapper>

      </Form>
      
    </Container>
  );
};

export default Register;