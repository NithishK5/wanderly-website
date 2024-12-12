import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const slideDown = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideUp = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const HamburgerButton = styled.div`
  position: fixed; /* Fix it to the viewport */
  top: 5%; /* Align with the top */
  left: 4%; /* Align with the left */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  z-index: 1001; /* Ensure it stays above other elements, including the Wanderly logo */

  /* Hide on larger screens */
  @media (min-width: 769px) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  width: 35px;
  height: 3px;
  background: ${({ isOpen }) => (isOpen ? "#d18bf5" : "#d6d6d6")};
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-image: url("/wanderly-website/src/assets/menuBg3.png");
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
  bottom: 5%;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
  color: #d6d6d6;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 0;

  &:hover {
    color: #d18bf5;
    font-family: "Arial", sans-serif;
    font-weight: bold;
  }

  &.faq {
    right: 5%;
  }

  &.dm-us {
    left: 5%;
  }
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 2%;
  width: 100%;
  text-align: center;
  color: #565658;
  font-family: "Arial", sans-serif;
  font-size: 12px;
  opacity: 0.7;
  font-style: normal;
`;

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationState, setAnimationState] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (menuOpen) {
      setAnimationState("close");
      setTimeout(() => {
        setMenuOpen(false);
        setAnimationState(null);
      }, 500);
    } else {
      setMenuOpen(true);
      setAnimationState("open");
    }
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <CloseIcon isOpen={menuOpen} />
        <CloseIcon isOpen={menuOpen} />
        <CloseIcon isOpen={menuOpen} />
      </HamburgerButton>
      {(menuOpen || animationState === "close") && (
        <Overlay animationState={animationState}>
          <MenuContent>
            <div>#coming soon</div>
            <div>not a dating app</div>
            <MenuButton
              className="faq"
              onClick={() => {
                toggleMenu();
                navigate("/faq");
              }}
            >
              FAQ
            </MenuButton>
            <MenuButton
              className="dm-us"
              onClick={() => {
                window.location.href =
                  "mailto:wanly.wanderly@gmail.com?subject=Contact%20Us&body=Hi%20there,%0A%0AI%20have%20a%20question%20about%20Wanderly.";
              }}
            >
              DM US
            </MenuButton>
            <FooterText>Wanderly - All Rights Reserved</FooterText>
          </MenuContent>
        </Overlay>
      )}
    </>
  );
};

export default HamburgerMenu;
