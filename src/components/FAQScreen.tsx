import React from "react";
import styled from "styled-components";

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #060606; /* Background color matching the landing screen */
`;

const Logo = styled.img`
  position: absolute;
  top: 5%; /* Same position as landing screen */
  right: 1%; /* Same position as landing screen */
  transform: translateY(-50%); /* Center vertically relative to the top */
  width: 470px; /* Same width as the landing screen */
  height: 150px; /* Maintain aspect ratio */
`;

const FAQScreen = () => {
  return (
    <Page>
      {/* Wanderly Logo */}
      <Logo src="/src/assets/wanderly1.png" alt="Wanderly Logo" />
    </Page>
  );
};

export default FAQScreen;
