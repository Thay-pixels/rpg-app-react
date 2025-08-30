import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';


const FooterContainer = styled.footer`
  background-color: #453d36ff;
  color: #d8d3d3ff;
  padding: 2rem 1rem;
  text-align: center;
  width: 100%;
  margin-top: 5px;
  margin-right: 0px;
  
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  
  a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0.75rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #d0d0d0;
    }
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

function Footer() {

  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialLinks>
      <CopyrightText>
        2025 Scriptum. Todos os direitos reservados.
      </CopyrightText>
    </FooterContainer>
  );
}

export default Footer;