import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import heroLottie from "../assets/lottie/heroLottie.json"; // Replace with your animation file path

const Container = styled.div`
  position: absolute;
  top: 2%; /* Adjust the distance from the top */
  left: 2%; /* Adjust the distance from the left */
  width: 150px; /* Set a smaller width for the animation */
  height: 150px; /* Set a smaller height for the animation */
`;

const FeatureLottie = () => {
  return (
    <Container>
      <Lottie
        animationData={heroLottie}
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </Container>
  );
};

export default FeatureLottie;
