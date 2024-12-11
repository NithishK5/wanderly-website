import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black; /* Background color */
  overflow: hidden;
`;

const Letter = styled(motion.img)`
  width: 100px;
  height: auto;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: 60px;
    margin: 0 5px;
  }
`;

const letters = [
  { src: "/src/assets/chars/W.png", alt: "W" },
  { src: "/src/assets/chars/A.png", alt: "A" },
  { src: "/src/assets/chars/N.png", alt: "N" },
  { src: "/src/assets/chars/D.png", alt: "D" },
  { src: "/src/assets/chars/E.png", alt: "E" },
  { src: "/src/assets/chars/R.png", alt: "R" },
  { src: "/src/assets/chars/L.png", alt: "L" },
  { src: "/src/assets/chars/Y.png", alt: "Y" },
];

const BalloonLetters = () => {
  return (
    <Container>
      {letters.map((letter, index) => (
        <Letter
          key={index}
          src={letter.src}
          alt={letter.alt}
          animate={{
            y: [0, -10, 0], // Up and down animation
          }}
          transition={{
            duration: 2, // Total duration for one cycle
            repeat: Infinity, // Loop the animation
            delay: index * 0.2, // Staggered effect
            ease: "easeInOut",
          }}
        />
      ))}
    </Container>
  );
};

export default BalloonLetters;
