import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form from "../../components/Form";
import Button from '../../components/Button';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Text from '../../components/Text';
import React, { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #1b1918ff;
  color: white;

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

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Dados de Login:', { email, password });

  };

  return (

    <Container>
      
      <FormWrapper>

        <Title>Login</Title>

        <Form onSubmit={handleSubmit}>

          <Text>Digite seu Email: </Text>
          <Input 
            type="email" 
            placeholder="fulano@exemplo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <Text>Digite sua Senha: </Text>
          <Input 
            type="password" 
            placeholder="Entre 5 a 12 caracteres." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <Button type="submit">Entrar</Button>

        </Form>

        <StyledLink to="/register">Não tem uma conta? Cadastre-se</StyledLink>
        <StyledLink to="/">Voltar para a Home</StyledLink>
      
      </FormWrapper>

    </Container>
  );
}

export default Login;