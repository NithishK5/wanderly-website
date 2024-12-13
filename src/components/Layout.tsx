import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import menuBg from "../assets/menuBg.png";
import wanderlyLogo from "../assets/wanderly.png";
import bgImage from "../assets/bg.png";
import heroLottie from "../assets/lottie/heroLottie.json";

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
  height: 100dvh; /* Use dynamic viewport height for better mobile support */
  min-height: -webkit-fill-available; /* Fix for mobile Safari */
  width: 100vw;
  background: #060606;
  overflow: hidden; /* Prevent any scrolling */

  /* Add padding or adjust spacing for smaller screens */
  @media (max-width: 768px) {
  }

  /* Add a max-width for larger screens if needed */
  @media (min-width: 1440px) {
  }
`;

const Line = styled.div`
  position: absolute;
  background: #565658; /* Line color */
`;

const HorizontalLine = styled(Line)`
  height: clamp(0.5px, 0.3vh, 0.1px); /* Dynamic height */
  width: 100%; /* Full width */
`;

const AppNameImage = styled.img`
  position: absolute;
  top: clamp(3%, 5vh, 8%); /* Responsive top position */
  right: clamp(0.5%, 1vw, 2%); /* Responsive right position */
  transform: translateY(-50%); /* Center the image vertically */
  width: clamp(300px, 25vw, 770px); /* Responsive width */
  height: clamp(100px, 15vw, 300px); /* Responsive height */

  @media (min-width: 1024px) {
    width: clamp(500px, 30vw, 1200px); /* Adjust width for larger screens */
    height: clamp(100px, 30vw, 150px); /* Adjust height for larger screens */
  }
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
  position: absolute; /* Changed from relative to absolute */
  bottom: 4.5%; /* Align relative to parent */
  right: 15%; /* Align relative to parent */

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

  /* Hide on smaller screens */
  @media (max-width: 768px) {
    display: none;
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

const CloseIcon = styled.div`
  width: 35px;
  height: 3px;
  background: ${({ isOpen }) =>
    isOpen ? "#d18bf5" : "#d6d6d6"}; /* Change color when open */
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
`;

const HamburgerButton = styled.div`
  position: absolute;
  top: clamp(2%, 4.5vh, 8%); /* Responsive vertical position */
  left: clamp(2%, 2.5vw, 4%); /* Responsive horizontal position */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(4px, 1vh, 5px); /* Responsive gap */
  z-index: 10;

  /* Hide on larger screens */
  @media (min-width: 769px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 1);
  background-image: url(${menuBg}); /* Use the imported image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Ensure no tiling */
  animation: ${({ animationState }) =>
      animationState === "open" ? slideDown : slideUp}
    0.5s forwards;

  @media (max-width: 768px) {
    background-size: contain; /* Adjust background size for smaller screens */
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #d6d6d6;
  font-family: "Trebuchet MS", sans-serif;
  font-size: clamp(35px, 5vw, 50px); /* Responsive font size */
  font-style: italic;
  backdrop-filter: blur(0.1px); /* Adds a frosted glass effect */
  text-align: center; /* Center text for better readability */
  padding: 10px; /* Add padding for smaller screens */
`;

const MenuButton = styled.button`
  position: absolute;
  bottom: clamp(2%, 5vh, 5%); /* Responsive vertical position */
  font-family: "Trebuchet MS", sans-serif;
  font-size: clamp(25px, 2vw, 30px); /* Responsive font size */
  color: #d6d6d6; /* Text color */
  background: none;
  border: none;
  cursor: pointer;
  padding: clamp(2px, 0.5vh, 5px) 0; /* Responsive vertical padding */

  &:hover {
    color: #d18bf5; /* Hover color */
    font-family: "Arial", sans-serif; /* Change font on hover */
    font-weight: bold; /* Make the text bold */
  }

  /* Position FAQ to the right */
  &.faq {
    right: clamp(2%, 5vw, 5%); /* Responsive horizontal position */
    bottom: clamp(7%, 5vw, 15%);
  }

  /* Position DM US to the left */
  &.dm-us {
    left: clamp(2%, 5vw, 5%); /* Responsive horizontal position */
    bottom: clamp(7%, 5vw, 15%);
  }
`;

const MenuLogo = styled.img`
  position: absolute;
  top: clamp(3%, 5vh, 8%); /* Match top position with AppNameImage */
  right: clamp(0.5%, 1vw, 2%); /* Match right position with AppNameImage */
  transform: translateY(-50%); /* Center the image vertically */
  width: clamp(
    300px,
    25vw,
    770px
  ); /* Match responsive width with AppNameImage */
  height: clamp(
    100px,
    15vw,
    300px
  ); /* Match responsive height with AppNameImage */
  z-index: 15; /* Keep above other elements */
`;

const PlusIcon = styled.div`
  position: absolute;
  color: #565658; /* Icon color */
  font-size: clamp(16px, 4vw, 20px); /* Responsive font size */

  /* Hide by default and show only on smaller screens */
  display: none;
  @media (max-width: 768px) {
    display: block;
  }

  &.left {
    top: 95%; /* Vertical position */
    left: clamp(20px, 5vw, 35px); /* Responsive left position */
    transform: translateY(-50%);
  }

  &.right {
    top: 95%; /* Vertical position */
    right: clamp(20px, 5vw, 35px); /* Responsive right position */
    transform: translateY(-50%);
  }
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 2%; /* Position the footer near the bottom */
  width: 100%; /* Take full width to center-align the text */
  text-align: center; /* Center the text */
  color: #565658; /* Match the color from the reference image */
  font-family: "Arial", sans-serif; /* Font style */
  font-size: 12px;
  opacity: 0.7; /* Slight transparency */
  font-style: normal; /* Ensure the text is not italic */
`;

const LeftLine = styled(Line)`
  width: 0.1vw; /* Line thickness relative to the viewport width */
  height: 100%; /* Matches the height of the CenteredContainer */
  position: absolute;
  top: 0;
  left: 3%; /* Position as a percentage of the viewport width */
  transform: translateX(-100%); /* Ensure it sticks to the left side */

  @media (max-width: 768px) {
    left: 14%; /* Adjust the position for smaller screens */
  }

  @media (min-width: 1440px) {
    left: 38%; /* Adjust for ultra-wide screens */
    top: 13%;
  }
`;

const RightLine = styled(Line)`
  width: 0.1vw; /* Line thickness relative to the viewport width */
  height: 100%; /* Matches the height of the CenteredContainer */
  position: absolute;
  top: 0;
  right: 3%; /* Position as a percentage of the viewport width */
  transform: translateX(100%); /* Ensure it sticks to the right side */

  @media (max-width: 768px) {
    right: clamp(10%, 18vw, 14%); /* Ensure dynamic scaling */
    top: clamp(10%, 13vh, 13%); /* Keep top position responsive */
  }

  @media (min-width: 1440px) {
    right: 38%;
    top: clamp(10%, 13vh, 13%); /* Keep top position responsive */
  }
`;

const CenteredContainer = styled.div`
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Ensure perfect centering */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(60%, 80vw, 90%); /* Mobile-first width */
  height: clamp(50%, 70vh, 100%); /* Mobile-first height */

  @media (min-width: 1440px) {
    width: clamp(30%, 40vw, 50%); /* Adjust width for ultra-wide screens */
    height: 100%; /* Keep full height */
  }
`;

const CenteredImage = styled.img`
  top: 2%;
  width: 80%; /* Match the width of the container */
  height: 90%; /* Maintain aspect ratio */
  max-height: 100%; /* Ensure it doesn't overflow the container */
  position: relative; /* Ensure the Lottie animation can overlay */
  border-radius: 20px; /* Add rounded corners */
  object-fit: cover; /* Ensure proper fit within the container */

  @media (min-width: 1440px) {
    width: clamp(30%, 40vw, 55%); /* Match the container width */
    height: 70%; /* Match the container height */
    top: 1.5%;
  }
`;

const LottieAnimation = styled(Player)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px; /* Default width for mobile */
  height: 200px; /* Default height for mobile */
  pointer-events: none; /* Prevent interaction with the animation */

  @media (min-width: 768px) {
    width: 30vw; /* Adjust width for tablet and larger screens */
    height: 30vh; /* Adjust height for tablet and larger screens */
  }

  @media (min-width: 1440px) {
    width: 300px; /* Fixed width for ultra-wide screens */
    height: 300px; /* Fixed height for ultra-wide screens */
  }
`;

const Layout = () => {
  const gap = 200; // Adjust this value to set the constant gap between vertical lines

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [animationState, setAnimationState] = useState(null); // Local animation state

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimationState("close"); // Trigger slide-up animation
      setTimeout(() => {
        setMenuOpen(false); // Close menu after animation completes
        setAnimationState(null); // Reset animation state
      }, 500); // Match animation duration
    } else {
      setMenuOpen(true); // Open menu immediately
      setAnimationState("open"); // Trigger slide-down animation
    }
  };

  return (
    <Page>
      {/* Hamburger Menu */}
      <HamburgerButton isOpen={menuOpen} onClick={toggleMenu}>
        <CloseIcon isOpen={menuOpen} />
        <CloseIcon isOpen={menuOpen} />
        <CloseIcon isOpen={menuOpen} />
      </HamburgerButton>

      {/* Overlay */}
      {menuOpen || animationState === "close" ? (
        <Overlay animationState={animationState}>
          <MenuContent>
            <MenuLogo src={wanderlyLogo} alt="Wanderly Logo" />
            <div>#coming soon</div>
            <div>not a dating app</div>
            {/* Add buttons inside the menu for mobile */}
            <MenuButton
              className="dm-us"
              onClick={() => {
                window.location.href =
                  "mailto:wanly.wanderly@gmail.com?subject=Contact%20Us&body=Hi%20there,%0A%0AI%20have%20a%20question%20about%20Wanderly.";
              }}
            >
              DM US
            </MenuButton>
            <MenuButton
              className="faq"
              onClick={() => {
                toggleMenu(); // Close menu before navigating
                navigate("/faq");
              }}
            >
              FAQ
            </MenuButton>
            <FooterText>Wanderly - All Rights Reserved</FooterText>
          </MenuContent>
        </Overlay>
      ) : null}

      {/* App Name Image */}
      <AppNameImage src={wanderlyLogo} alt="App Name" />

      {/* Horizontal Lines */}
      <HorizontalLine style={{ top: "13%" }} />
      <HorizontalLine style={{ bottom: "10%" }} />

      {/* Plus Icons */}
      <PlusIcon className="left">+</PlusIcon>
      <PlusIcon className="right">+</PlusIcon>

      {/* Centered Image and Lottie Animation */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <CenteredContainer>
          <CenteredImage src={bgImage} alt="Animation Background" />
          <LottieAnimation
            autoplay
            loop
            src={heroLottie} // Use the imported JSON
            speed={1} // Adjust speed
          />
        </CenteredContainer>
        <LeftLine style={{ height: "100%" }} />
        <RightLine style={{ height: "90%" }} />
      </div>

      {/* Bottom Left Text */}
      <BottomText># not a dating app</BottomText>
      <BottomText2>WANDERLY - ALL RIGHTS RESERVED</BottomText2>
      {/* <Arrow /> */}
      <BottomText3>Coming Soon!</BottomText3>

      {/* Buttons */}
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate("/faq");
          }}
        >
          FAQ
        </Button>
        <Button
          onClick={() => {
            window.location.href =
              "mailto:wanly.wanderly@gmail.com?subject=Contact%20Us&body=Hi%20there,%0A%0AI%20have%20a%20question%20about%20Wanderly.";
          }}
        >
          DM US
        </Button>
      </ButtonContainer>
    </Page>
  );
};

export default Layout;
