// import React from "react";
// import styled from "styled-components";
// import { Player } from "@lottiefiles/react-lottie-player";

// const Page = styled.div`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   background: #060606; /* Background color */
// `;

// const Line = styled.div`
//   position: absolute;
//   background: #565658; /* Line color */
// `;

// const HorizontalLine = styled(Line)`
//   height: 0.5px;
//   width: 100%;
// `;

// const FirstVerticalLine = styled(Line)`
//   width: 0.5px;
//   height: calc(90%); /* Default height */
//   top: 107px; /* Extend to the top */

//   /* Increase height for smaller screens */
//   @media (max-width: 768px) {
//     height: calc(100%);
//     top: 0; /* Extend to the top */
//   }
// `;

// const VerticalLine = styled(Line)`
//   width: 0.5px;
//   height: calc(90%); /* Spans between top and bottom lines */
// `;

// const AppNameImage = styled.img`
//   position: absolute;
//   top: 5%; /* Place the image above the top horizontal line */
//   right: 1%; /* Keep the image close to the right */
//   transform: translateY(-50%); /* Center the image vertically */
//   width: 470px; /* Fixed width */
//   height: 150px; /* Maintain aspect ratio */
// `;

// const BottomText = styled.div`
//   position: absolute;
//   bottom: 3%;
//   left: 5%;
//   color: #d6d6d6; /* Text color */
//   font-family: "Trebuchet MS", sans-serif; /* Font style */
//   font-size: 20px;
//   font-weight: 100; /* Medium weight */
//   font-style: italic; /* Italic style */

//   /* Hide on smaller screens */
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const BottomText2 = styled.div`
//   position: absolute;
//   bottom: 1%;
//   left: 44%;
//   color: #565658; /* Text color */
//   font-family: "Arial", sans-serif; /* Font style */
//   font-size: 10px;
//   opacity: 70%;

//   /* Hide on smaller screens */
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Arrow = styled.div`
//   width: 20px;
//   height: 2px;
//   background: #d6d6d6; /* Arrow color */
//   position: relative;
//   top: 783px;
//   left: 1270px;

//   &:after {
//     content: "";
//     position: absolute;
//     top: -5px;
//     right: -10px;
//     width: 10px;
//     height: 10px;
//     border-top: 2px solid white;
//     border-right: 2px solid white;
//     transform: rotate(45deg);
//   }
// `;

// const BottomText3 = styled.div`
//   position: absolute;
//   bottom: 3%;
//   right: 5%;
//   color: #d6d6d6; /* Text color */
//   font-family: "Trebuchet MS", sans-serif; /* Font style */
//   font-size: 20px;
//   font-weight: 100; /* Medium weight */
//   font-style: italic; /* Italic style */

//   /* Hide on smaller screens */
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const ButtonContainer = styled.div`
//   position: absolute;
//   bottom: 15%; /* Adjust vertical positioning */
//   left: 5%; /* Adjust horizontal positioning */
//   display: flex;
//   flex-direction: column; /* Stack buttons vertically */
//   gap: 20px; /* Space between buttons */

//   /* Hide on smaller screens */
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Button = styled.button`
//   background: none;
//   color: #d6d6d6;
//   border: none;
//   font-family: "Trebuchet MS", sans-serif; /* Use a built-in font */
//   font-size: 16px;
//   text-transform: uppercase;
//   cursor: pointer;
//   padding: 5px 0; /* Vertical padding */
//   text-align: left; /* Align text to the left */
//   padding-left: 0px; /* Add consistent left padding */

//   &:hover {
//     color: #d18bf5; /* Change text color on hover */
//     font-family: "Arial", sans-serif; /* Change font on hover */
//     font-weight: bold; /* Make the text bold */
//   }
// `;

// const HamburgerButton = styled.div`
//   position: absolute;
//   top: 4%;
//   left: 4%;
//   cursor: pointer;
//   display: none;

//   /* Show only on smaller screens */
//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 6px;
//   }

//   div {
//     width: 35px; /* Adjust width for proportions */
//     height: 3px; /* Adjust thickness of the lines */
//     background: #d6d6d6; /* Matches your color */
//     transition: all 0.3s ease; /* Adds smooth animation for interactions */

//     /* Optional: rounded edges for the lines */
//     border-radius: 5px;
//   }

//   /* Hover effect */
//   &:hover div {
//     background: #ffffff; /* Optional lighter shade on hover */
//   }
// `;

// const PlusIcon = styled.div`
//   position: absolute;
//   color: #565658; /* Icon color */
//   font-size: 20px; /* Adjust the size of the icon */

//   /* Hide by default and show only on smaller screens */
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//   }

//   &.left {
//     top: 95%; /* Vertically center */
//     left: 35px; /* Position on the very left */
//     transform: translateY(-50%);
//   }

//   &.right {
//     top: 95%; /* Vertically center */
//     right: 35px; /* Position on the very right */
//     transform: translateY(-50%);
//   }
// `;

// const CenteredContainer = styled.div`
//   position: absolute;
//   top: 51.5%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const CenteredImage = styled.img`
//   width: 370px; /* Set a fixed width for the image */
//   height: 600px; /* Maintain aspect ratio */
//   position: relative; /* Ensure the Lottie animation can overlay */
//   border-radius: 20px; /* Add rounded corners */
// `;

// const LottieAnimation = styled(Player)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 400px; /* Adjust size of the animation */
//   height: 400px;
//   pointer-events: none; /* Prevent interaction with the animation */
// `;

// const Layout = () => {
//   const gap = 200; // Adjust this value to set the constant gap between vertical lines

//   return (
//     <Page>
//       {/* Hamburger Menu */}
//       <HamburgerButton>
//         <div />
//         <div />
//         <div />
//       </HamburgerButton>

//       {/* App Name Image */}
//       <AppNameImage src="/src/assets/Wanderly1.png" alt="App Name" />

//       {/* Horizontal Lines */}
//       <HorizontalLine style={{ top: "13%" }} />
//       <HorizontalLine style={{ bottom: "10%" }} />

//       {/* Vertical Lines */}
//       <FirstVerticalLine style={{ left: `calc(50% - ${gap}px)` }} />
//       <VerticalLine style={{ top: "13%", left: `calc(50% + ${gap}px)` }} />

//       {/* Plus Icons */}
//       <PlusIcon className="left">+</PlusIcon>
//       <PlusIcon className="right">+</PlusIcon>

//       {/* Centered Image and Lottie Animation */}
//       <CenteredContainer>
//         <CenteredImage src="/src/assets/bg4.png" alt="Animation Background" />
//         <LottieAnimation
//           autoplay
//           loop
//           src="/src/assets/lottie/heroLottie2.json" // Path to your Lottie JSON file
//           speed={1} // Adjust speed
//         />
//       </CenteredContainer>

//       {/* Bottom Left Text */}
//       <BottomText># not a dating app</BottomText>
//       <BottomText2>WANDERLY - ALL RIGHTS RESERVED</BottomText2>
//       <Arrow />
//       <BottomText3>Coming Soon!</BottomText3>

//       {/* Buttons */}
//       <ButtonContainer>
//         <Button>FAQ</Button>
//         <Button>DM US</Button>
//       </ButtonContainer>
//     </Page>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

// Animation for the overlay sliding down
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Animation for the overlay sliding up
const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #060606; /* Background color */
`;

const Line = styled.div`
  position: absolute;
  background: #565658; /* Line color */
`;

const HorizontalLine = styled(Line)`
  height: 0.5px;
  width: 100%;
`;

const FirstVerticalLine = styled(Line)`
  width: 0.5px;
  height: calc(90%); /* Default height */
  top: 107px; /* Extend to the top */

  /* Increase height for smaller screens */
  @media (max-width: 768px) {
    height: calc(100%);
    top: 0; /* Extend to the top */
  }
`;

const VerticalLine = styled(Line)`
  width: 0.5px;
  height: calc(90%); /* Spans between top and bottom lines */
`;

const AppNameImage = styled.img`
  position: absolute;
  top: 5%; /* Place the image above the top horizontal line */
  right: 1%; /* Keep the image close to the right */
  transform: translateY(-50%); /* Center the image vertically */
  width: 470px; /* Fixed width */
  height: 150px; /* Maintain aspect ratio */
`;

const BottomText = styled.div`
  position: absolute;
  bottom: 3%;
  left: 5%;
  color: #d6d6d6; /* Text color */
  font-family: "Trebuchet MS", sans-serif; /* Font style */
  font-size: 20px;
  font-weight: 100; /* Medium weight */
  font-style: italic; /* Italic style */

  /* Hide on smaller screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomText2 = styled.div`
  position: absolute;
  bottom: 1%;
  left: 44%;
  color: #565658; /* Text color */
  font-family: "Arial", sans-serif; /* Font style */
  font-size: 10px;
  opacity: 70%;

  /* Hide on smaller screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 20px;
  height: 2px;
  background: #d6d6d6; /* Arrow color */
  position: relative;
  top: 783px;
  left: 1270px;

  &:after {
    content: "";
    position: absolute;
    top: -5px;
    right: -10px;
    width: 10px;
    height: 10px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
  }
`;

const BottomText3 = styled.div`
  position: absolute;
  bottom: 3%;
  right: 5%;
  color: #d6d6d6; /* Text color */
  font-family: "Trebuchet MS", sans-serif; /* Font style */
  font-size: 20px;
  font-weight: 100; /* Medium weight */
  font-style: italic; /* Italic style */

  /* Hide on smaller screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15%; /* Adjust vertical positioning */
  left: 5%; /* Adjust horizontal positioning */
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  gap: 20px; /* Space between buttons */

  /* Hide on smaller screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: none;
  color: #d6d6d6;
  border: none;
  font-family: "Trebuchet MS", sans-serif; /* Use a built-in font */
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 5px 0; /* Vertical padding */
  text-align: left; /* Align text to the left */
  padding-left: 0px; /* Add consistent left padding */

  &:hover {
    color: #d18bf5; /* Change text color on hover */
    font-family: "Arial", sans-serif; /* Change font on hover */
    font-weight: bold; /* Make the text bold */
  }
`;

const HamburgerButton = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  z-index: 10;

  div {
    width: 35px;
    height: 3px;
    background: #d6d6d6;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) => (isOpen ? "scale(0)" : "scale(1)")};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9;
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.5s forwards;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #d6d6d6;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 24px;
  font-weight: bold;
`;

const PlusIcon = styled.div`
  position: absolute;
  color: #565658; /* Icon color */
  font-size: 20px; /* Adjust the size of the icon */

  /* Hide by default and show only on smaller screens */
  display: none;
  @media (max-width: 768px) {
    display: block;
  }

  &.left {
    top: 95%; /* Vertically center */
    left: 35px; /* Position on the very left */
    transform: translateY(-50%);
  }

  &.right {
    top: 95%; /* Vertically center */
    right: 35px; /* Position on the very right */
    transform: translateY(-50%);
  }
`;

const CenteredContainer = styled.div`
  position: absolute;
  top: 51.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenteredImage = styled.img`
  width: 370px; /* Set a fixed width for the image */
  height: 600px; /* Maintain aspect ratio */
  position: relative; /* Ensure the Lottie animation can overlay */
  border-radius: 20px; /* Add rounded corners */
`;

const LottieAnimation = styled(Player)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px; /* Adjust size of the animation */
  height: 400px;
  pointer-events: none; /* Prevent interaction with the animation */
`;

const Layout = () => {
  const gap = 200; // Adjust this value to set the constant gap between vertical lines

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Page>
      {/* Hamburger Menu */}
      <HamburgerButton isOpen={menuOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </HamburgerButton>

      {/* Overlay */}
      {menuOpen && (
        <Overlay isOpen={menuOpen}>
          <MenuContent>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </MenuContent>
        </Overlay>
      )}

      {/* App Name Image */}
      <AppNameImage src="/src/assets/Wanderly1.png" alt="App Name" />

      {/* Horizontal Lines */}
      <HorizontalLine style={{ top: "13%" }} />
      <HorizontalLine style={{ bottom: "10%" }} />

      {/* Vertical Lines */}
      <FirstVerticalLine style={{ left: `calc(50% - ${gap}px)` }} />
      <VerticalLine style={{ top: "13%", left: `calc(50% + ${gap}px)` }} />

      {/* Plus Icons */}
      <PlusIcon className="left">+</PlusIcon>
      <PlusIcon className="right">+</PlusIcon>

      {/* Centered Image and Lottie Animation */}
      <CenteredContainer>
        <CenteredImage src="/src/assets/bg4.png" alt="Animation Background" />
        <LottieAnimation
          autoplay
          loop
          src="/src/assets/lottie/heroLottie2.json" // Path to your Lottie JSON file
          speed={1} // Adjust speed
        />
      </CenteredContainer>

      {/* Bottom Left Text */}
      <BottomText># not a dating app</BottomText>
      <BottomText2>WANDERLY - ALL RIGHTS RESERVED</BottomText2>
      <Arrow />
      <BottomText3>Coming Soon!</BottomText3>

      {/* Buttons */}
      <ButtonContainer>
        <Button>FAQ</Button>
        <Button>DM US</Button>
      </ButtonContainer>
    </Page>
  );
};

export default Layout;
