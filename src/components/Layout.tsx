// import React from "react";
// import styled from "styled-components";

// const Page = styled.div`
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   background: black; /* Full black background */
// `;

// const Line = styled.div`
//   position: absolute;
//   background: white; /* Line color */
// `;

// const HorizontalLine = styled(Line)`
//   height: 1px;
//   width: 100%;
// `;

// const VerticalLine = styled(Line)`
//   width: 1px;
//   height: calc(100% / 3); /* Spans from top to bottom line */
// `;

// const Layout = () => {
//   return (
//     <Page>
//       {/* Top horizontal line */}
//       <HorizontalLine style={{ top: "25%" }} />

//       {/* Bottom horizontal line */}
//       <HorizontalLine style={{ bottom: "15%" }} />

//       {/* Vertical lines */}
//       <VerticalLine style={{ top: "25%", left: "70%" }} />
//       <VerticalLine style={{ top: "25%", left: "calc(50% + 20px)" }} />
//     </Page>
//   );
// };

// export default Layout;

import React from "react";
import styled from "styled-components";
import FeatureLottie from "./FeatureLottie";

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: black; /* Full black background */
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 8%; /* Position vertically */
  right: 2%; /* Position close to the left edge */
  display: flex;
  align-items: center;
  gap: 40px; /* Space between arrow and button */
`;

const Button = styled.div`
  // background: #d18bf5; /* Light purple background */
  background: white; /* Light purple background */
  color: black; /* Text color */
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Optional: Shadow for depth */
`;

const Arrow = styled.div`
  width: 20px;
  height: 2px;
  background: white; /* Arrow color */
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: -4px;
    right: -5px;
    width: 10px;
    height: 10px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
  }
`;

const Layout = () => {
  return (
    <Page>
      <ButtonContainer>
        <Arrow />
        <Button>COMING SOON</Button>
      </ButtonContainer>
      <FeatureLottie />
    </Page>
  );
};

export default Layout;
