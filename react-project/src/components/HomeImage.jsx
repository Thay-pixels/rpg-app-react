import styled from 'styled-components';

const HomeImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 10px;
  margin: 30px 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

`;

export default HomeImage;