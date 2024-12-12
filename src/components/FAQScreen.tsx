// import React from "react";
// import styled from "styled-components";

// const Page = styled.div`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   background: #060606; /* Background color matching the landing screen */
// `;

// const Logo = styled.img`
//   position: absolute;
//   top: 5%; /* Same position as landing screen */
//   right: 1%; /* Same position as landing screen */
//   transform: translateY(-50%); /* Center vertically relative to the top */
//   width: 470px; /* Same width as the landing screen */
//   height: 150px; /* Maintain aspect ratio */
// `;

// const FAQScreen = () => {
//   return (
//     <Page>
//       {/* Wanderly Logo */}
//       <Logo src="/src/assets/wanderly1.png" alt="Wanderly Logo" />
//     </Page>
//   );
// };

// export default FAQScreen;

import React from "react";
import styled, { keyframes } from "styled-components";

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #060606;
`;

const Logo = styled.img`
  position: absolute;
  top: 5%;
  right: 1%;
  transform: translateY(-50%);
  width: 470px;
  height: 150px;
`;

const ImageCarousel = styled.div`
  position: absolute;
  bottom: 10%; /* Adjust vertical position */
  width: 100%; /* Full-width container */
  overflow: hidden; /* Hide overflowing images */
  height: 300px; /* Adjust height for images */
`;

const moveRight = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const moveLeft = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

const ImageStrip = styled.div`
  display: flex;
  animation: ${moveRight} 10s linear infinite alternate; /* Animates right and reverses */
`;

const Image = styled.img`
  height: 300px;
  flex-shrink: 0; /* Prevent images from shrinking */
  width: auto;
`;

const FAQScreen = () => {
  const images = [
    "/src/assets/faq/Coffee.png",
    "/src/assets/faq/Concerts.png",
    "/src/assets/faq/Cultural.png",
    "/src/assets/faq/Events.png",
    "/src/assets/faq/Fitness.png",
    "/src/assets/faq/Games.png",
    "/src/assets/faq/Mindfulness.png",
    "/src/assets/faq/Movie.png",
    "/src/assets/faq/Nightlife.png",
    "/src/assets/faq/Outdoor.png",
    "/src/assets/faq/Restaurants.png",
    "/src/assets/faq/Shopping.png",
    "/src/assets/faq/Sports.png",
    "/src/assets/faq/Tech.png",
    "/src/assets/faq/Volunteering.png",
    "/src/assets/faq/Workshops.png",
  ];

  return (
    <Page>
      {/* Wanderly Logo */}
      <Logo src="/src/assets/wanderly1.png" alt="Wanderly Logo" />
      {/* Horizontal Image Strip */}
      <ImageCarousel>
        <ImageStrip>
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
          {/* Duplicate images for seamless reverse */}
          {images.map((image, index) => (
            <Image
              key={`duplicate-${index}`}
              src={image}
              alt={`Duplicate Image ${index + 1}`}
            />
          ))}
        </ImageStrip>
      </ImageCarousel>
    </Page>
  );
};

export default FAQScreen;
