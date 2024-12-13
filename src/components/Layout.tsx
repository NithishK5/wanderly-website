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
  position: relative; /* Add this to make the Arrow align correctly */
  height: 100vh;
  width: 100vw;
  background: #060606;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: hidden; /* Prevent horizontal scrolling */
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

// Update HamburgerButton to use the CloseIcon
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
  background-image: url(${menuBg}); /* Use the imported image */
  background-size: cover;
  background-position: center;
  animation: ${({ animationState }) =>
      animationState === "open" ? slideDown : slideUp}
    0.5s forwards;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #d6d6d6;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 50px;
  font-style: italic;
  backdrop-filter: blur(10px);
`;

const MenuButton = styled.button`
  position: absolute;
  bottom: 5%; /* Adjust the vertical position */
  font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
  color: #d6d6d6; /* Text color */
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 0; /* Vertical padding */

  &:hover {
    color: #d18bf5; /* Hover color */
    font-family: "Arial", sans-serif; /* Change font on hover */
    font-weight: bold; /* Make the text bold */
  }

  /* Position FAQ to the right */
  &.faq {
    right: 5%; /* Adjust the horizontal position for FAQ */
  }

  /* Position DM US to the left */
  &.dm-us {
    left: 5%; /* Adjust the horizontal position for DM US */
  }
`;

const MenuLogo = styled.img`
  position: absolute;
  top: -1.5%; /* Position the logo at the top */
  right: -2.5%; /* Align to the top-right */
  width: 400px; /* Adjust the width as needed */
  height: auto; /* Maintain the aspect ratio */
  z-index: 15; /* Ensure it appears above other elements */
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

      {/* Vertical Lines */}
      <FirstVerticalLine style={{ left: `calc(50% - ${gap}px)` }} />
      <VerticalLine style={{ top: "13%", left: `calc(50% + ${gap}px)` }} />

      {/* Plus Icons */}
      <PlusIcon className="left">+</PlusIcon>
      <PlusIcon className="right">+</PlusIcon>

      {/* Centered Image and Lottie Animation */}
      <CenteredContainer>
        <CenteredImage src={bgImage} alt="Animation Background" />
        <LottieAnimation
          autoplay
          loop
          src={heroLottie} // Use the imported JSON
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
              "mailto:your-email@example.com?subject=Contact%20Us&body=Hi%20there,%0A%0AI%20have%20a%20question%20about%20Wanderly.";
          }}
        >
          DM US
        </Button>
      </ButtonContainer>
    </Page>
  );
};

export default Layout;
