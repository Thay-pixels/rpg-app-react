import styled from 'styled-components';

const Button = styled.button`
  background-color: #bea96cff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a38e61ff;
  }
`;

export default Button;