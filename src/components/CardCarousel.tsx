import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80%;
  width: 30%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Card = styled(motion.div)`
  position: absolute;
  width: 90%;
  height: 50%;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  border: 2px solid white;
  transition: transform 0.3s;
`;

const images = [
  "https://via.placeholder.com/300x400?text=Card+1",
  "https://via.placeholder.com/300x400?text=Card+2",
  "https://via.placeholder.com/300x400?text=Card+3",
];

const CardCarousel = () => {
  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <Card
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          initial={{ y: index * 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        />
      ))}
    </CarouselContainer>
  );
};

export default CardCarousel;
