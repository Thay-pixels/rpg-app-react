import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 2;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => (props.primary ? "#4caf50" : "transparent")};
  color: white;
  border: ${(props) => (props.primary ? "none" : "2px solid white")};

  &:hover {
    opacity: 0.8;
  }
`;

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>LOGO</div>
      <NavButtons>
        <Button onClick={() => navigate("/login")}>Log In</Button>
        <Button primary onClick={() => navigate("/register")}>Sign Up</Button>
      </NavButtons>
    </NavbarContainer>
  );
}