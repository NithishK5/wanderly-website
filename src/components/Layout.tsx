import React from "react";
import styled from "styled-components";

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

const VerticalLine = styled(Line)`
  width: 0.5px;
  height: calc(90%); /* Spans between top and bottom lines */
`;

const AppNameImage = styled.img`
  position: absolute;
  top: 5%; /* Place the image above the top horizontal line */
  right: 1%; /* Keep the image close to the right */
  transform: translateY(-50%); /* Center the image vertically */
  width: 550px; /* Fixed width */
  height: auto; /* Maintain aspect ratio */
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

const Layout = () => {
  const gap = 200; // Adjust this value to set the constant gap between vertical lines

  return (
    <Page>
      {/* App Name Image */}
      <AppNameImage src="/src/assets/Wanderly1.png" alt="App Name" />

      {/* Horizontal Lines */}
      <HorizontalLine style={{ top: "13%" }} />
      <HorizontalLine style={{ bottom: "10%" }} />

      {/* Vertical Lines with constant gap */}
      <VerticalLine style={{ top: "13%", left: `calc(50% - ${gap / 1}px)` }} />
      <VerticalLine style={{ top: "13%", left: `calc(50% + ${gap / 1}px)` }} />

      {/* Bottom Left Text */}
      <BottomText># not a dating app</BottomText>
      <BottomText2>WANDERLY - ALL RIGHTS RESERVED</BottomText2>
      <BottomText3># coming soon</BottomText3>

      {/* Buttons */}
      <ButtonContainer>
        <Button>FAQ</Button>
        <Button>DM US</Button>
      </ButtonContainer>
    </Page>
  );
};

export default Layout;

// import React from "react";
// import styled from "styled-components";
// import FeatureLottie from "./FeatureLottie";
// import BalloonLetters from "./BalloonLetters";

// const Page = styled.div`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   background: black; /* Full black background */
// `;

// const ButtonContainer = styled.div`
//   position: absolute;
//   top: 8%; /* Position vertically */
//   right: 2%; /* Position close to the left edge */
//   display: flex;
//   align-items: center;
//   gap: 40px; /* Space between arrow and button */
// `;

// const Button = styled.div`
//   // background: #d18bf5; /* Light purple background */
//   background: white; /* Light purple background */
//   color: black; /* Text color */
//   font-size: 14px;
//   font-weight: bold;
//   padding: 10px 20px;
//   border-radius: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Optional: Shadow for depth */
// `;

// const Arrow = styled.div`
//   width: 20px;
//   height: 2px;
//   background: white; /* Arrow color */
//   position: relative;

//   &:after {
//     content: "";
//     position: absolute;
//     top: -4px;
//     right: -5px;
//     width: 10px;
//     height: 10px;
//     border-top: 2px solid white;
//     border-right: 2px solid white;
//     transform: rotate(45deg);
//   }
// `;

// const Layout = () => {
//   return (
//     <Page>
//       <ButtonContainer>
//         <Arrow />
//         <Button>COMING SOON</Button>
//       </ButtonContainer>
//       <FeatureLottie />
//       <BalloonLetters />
//     </Page>
//   );
// };

// export default Layout;
