import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {
  LandingContainer,
  Background,
  Content,
  Title,
  Subtitle,
  Button,
} from "./landing-style";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Navbar />
      <Background />
      <Content>
        <Title>Bring your world to life.</Title>
        <Subtitle>
          Discover why millions choose our app. Try it for free!
        </Subtitle>
        <Button primary onClick={() => navigate("/home")}>
          Try Now
        </Button>
      </Content>
    </LandingContainer>
  );
}