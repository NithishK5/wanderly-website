import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamBurgerMenu";

const Page = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #060606;
  overflow-y: auto; /* Allow scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  box-sizing: border-box;

  /* Hide scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    display: none; /* Completely hide the scrollbar */
  }

  /* For all browsers: Clip visible scrollbars out of view */
  clip-path: inset(0 0 0 -15px); /* Push the scrollbar outside the viewport */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 100%; /* Ensure content doesn't exceed parent width */
  padding: 0 20px;
  box-sizing: border-box; /* Include padding and border in width/height calculations */
`;

const Logo = styled.img`
  position: fixed; /* Change to fixed to stay on top */
  top: 5%;
  right: -0.5%;
  transform: translateY(-50%);
  width: 470px;
  height: 150px;
  cursor: pointer;
  z-index: 1000; /* Ensure it stays above other elements */
`;

const ImageCarousel = styled.div`
  position: absolute;
  bottom: 50%;
  width: 100%;
  overflow: hidden;
  height: 300px;
`;

const moveRight = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const ImageStrip = styled.div`
  display: flex;
  animation: ${moveRight} 20s linear infinite alternate;
`;

const Image = styled.img`
  height: 250px;
  flex-shrink: 0;
  width: auto;
`;

const FAQContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 400px; /* Move the FAQ section down */
  justify-content: flex-start; /* Start content from the top */
  min-height: 60vh; /* Set a minimum height to prevent jumps */
  padding: 20px;
  background-color: transparent; /* No background color */
  transition: height 0.3s ease; /* Smooth transition for height changes */
`;

const FAQItem = styled.div`
  width: 100%; /* Full width for the container */
  max-width: 100vw; /* Ensure it spans the full viewport */
  margin-bottom: 20px; /* Add spacing between items */
  border-bottom: 1px solid #d6d6d6; /* Full-width border */
  padding: 0 100px; /* Add padding to center the content visually */
  box-sizing: border-box; /* Include padding in the width calculation */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack question and answer vertically */

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 0 50px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 0 20px; /* Further adjust padding for mobile screens */
  }
`;

const QuestionContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  background-color: transparent; /* Transparent background */
  color: ${({ isOpen }) =>
    isOpen ? "#ff8ae2" : "#d6d6d6"}; /* Change question text color only */
  transition: color 0.3s ease; /* Smooth color transition */
  font-size: 35px; /* Adjust font size for desktop */

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 24px; /* Smaller font size for tablets and mobile */
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 20px; /* Further reduced font size for small screens */
    padding: 8px;
  }
`;

const QuestionText = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin: 0;
  font-size: inherit; /* Inherit font size from QuestionContainer for consistency */

  /* Optional: Add line breaks for small screens */
  @media (max-width: 480px) {
    word-break: break-word; /* Break long words if necessary */
  }
`;

const AnswerContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) =>
    isOpen ? "200px" : "0"}; /* Adjust max-height as needed */
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  font-size: 20px; /* Default font size for desktop */
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-style: normal;
  color: #565658;
  background-color: transparent; /* Transparent background */
  width: 100%; /* Ensure answer aligns with the question */
  padding: ${({ isOpen }) => (isOpen ? "15px" : "0")};

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Further reduce font size for mobile */
    padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  }
`;

const Icon = styled.div<{ isOpen: boolean }>`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease; /* Smooth rotation transition */
  color: ${({ isOpen }) =>
    isOpen ? "#ff8ae2" : "#d6d6d6"}; /* Change color based on state */
`;

const TextCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Hide overflowing text */
  height: 50px;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const moveText = keyframes`
  0% { transform: translateX(0); } /* Start at the beginning */
  50% { transform: translateX(-50%); } /* Move halfway, where it reverses */
  100% { transform: translateX(0); } /* Return to the original position */
`;

const TextStrip = styled.div`
  display: flex;
  width: 200%; /* Make the strip twice the width of the container */
  animation: ${moveText} 20s linear infinite alternate; /* Back-and-forth motion */
`;

const CarouselText = styled.span`
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #ff8ae2;
  text-transform: uppercase;
  white-space: nowrap; /* Prevent wrapping */
  margin-right: 20px; /* Add spacing between text items */
`;

const Footer = styled.div`
  position: sticky; /* Keeps it at the bottom of the viewport */
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  ); /* Smoke/gradient effect */
  text-align: center;
  padding: 10px 0;
  z-index: 1000; /* Ensure it stays on top of other elements */
  color: #565658;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  letter-spacing: 1px;

  /* Responsive font-size adjustments */
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const FooterText = styled.span`
  opacity: 0.8; /* Slight transparency */
  @media (max-width: 768px) {
    display: none; /* Hide on smaller screens */
  }
`;

const FooterButtons = styled.div`
  position: absolute;
  top: -10%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around; /* Distribute buttons with space */
  width: 100%;
  max-width: 600px; /* Limit max width for layout */

  @media (max-width: 768px) {
    display: none; /* Hide on smaller screens */
  }
`;

const FooterButton = styled.button<{ isActive?: boolean }>`
  background: none;
  border: none;
  color: ${({ isActive }) =>
    isActive ? "#ff8ae2" : "#d6d6d6"}; /* Highlight active button */
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #ffffff;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const FAQScreen = () => {
  const navigate = useNavigate();
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null
  );

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

  const faqs = [
    {
      question: "What is Wanderly?",
      answer:
        "Wanderly is a platform for spontaneous and planned hangouts, connecting like-minded people.",
    },
    {
      question: "How does Wanderly work?",
      answer:
        "With Wanderly, you can vibe with people close by for a quick link-up or plan something chill for later. Just set your interests and when you're free, and boom, you'll be matched with folks who are down for the same. Whether you're tryna hang now or save it for later, Wanderly's got you covered.",
    },
    {
      question: "Why am I only liking on places and not people?",
      answer:
        "Wanderly's all about the vibe! You like on spots and activities first—no endless profiles here. When you like something, the person who set it up gets a heads-up. If they're feelin' your vibe, they'll accept, and boom—you're in for the hang!",
    },
    {
      question: "How do I increase my chances of finding a hangout match?",
      answer:
        "Wanna get more hangout vibes? Stay active and check the Instant tab often for cool stuff happening around you. Don't ghost the app—hit up those hangouts when you're free and be quick to join the ones that catch your eye. The more you vibe with the app, the more it vibes with you!",
    },
    {
      question: "How do I create a hangout?",
      answer:
        "Wanna set up a hang? Just hit the Create Hangout button, drop in the deets—like where, what, and when—and you're good to go! People nearby can check it out and jump in if they're feelin' it.",
    },
    {
      question: "How Does the Hangout Approval Process Work?",
      answer:
        "When you drop a hangout, people can like it if they're down. You'll be able to peep their profiles and decide if you're feelin' the vibe. Only you get to see who's tryna hang, and if you like 'em back, boom—you match, and they're in on the hangout!",
    },
    {
      question: "What happens if no one joins my hangout?",
      answer:
        "If no one's joined your hang yet, don't trip! It stays live until the hangout time kicks off—whether it's later today or tomorrow. You've still got time to reel people in, and once someone matches your vibe, the hangout's on!",
    },
    {
      question: "Is my location shared with others in Wanderly?",
      answer:
        "No one's tracking your live location on Wanderly. People can only peep the spot you're proposing to hang. Once you match with someone for the hangout, all the juicy details—like where and when will get shared with both of you.",
    },
    {
      question: "Can I report another user?",
      answer:
        "Yep! If someone's acting shady or making you uncomfortable, you can block or report them. Just head to their profile, hit Report, and you're all set.",
    },
    {
      question: "How do I delete or edit a hangout I created?",
      answer:
        "Wanna switch up or drop a hangout? Just head to your profile, and in the Upcoming Hangouts section, find the one you wanna change. From there, you can edit the details or delete it with no hassle.",
    },
    {
      question: "What should I do if I have technical issues with Wanderly?",
      answer:
        "Got tech issues? No worries! You can hit us up through the Help section or shoot us an email. We'll fix it up fast so you can get back to hanging.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "Need a break? Head to Settings and tap Delete Account. Once you do, all your info will be gone for good.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Page>
      <HamburgerMenu />
      <Logo
        src="/src/assets/wanderly1.png"
        alt="Wanderly Logo"
        onClick={() => navigate("/")}
      />

      <ContentContainer>
        <ImageCarousel>
          <ImageStrip>
            {images.map((image, index) => (
              <Image key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
            {images.map((image, index) => (
              <Image
                key={`duplicate-${index}`}
                src={image}
                alt={`Duplicate Image ${index + 1}`}
              />
            ))}
          </ImageStrip>
        </ImageCarousel>

        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <QuestionContainer
                isOpen={openQuestionIndex === index}
                onClick={() => toggleQuestion(index)}
              >
                <QuestionText>{faq.question}</QuestionText>
                <Icon isOpen={openQuestionIndex === index}>+</Icon>
              </QuestionContainer>

              {openQuestionIndex === index && (
                <AnswerContainer isOpen={openQuestionIndex === index}>
                  {faq.answer}
                </AnswerContainer>
              )}
            </FAQItem>
          ))}
        </FAQContainer>
      </ContentContainer>
      <TextCarouselContainer>
        <TextStrip>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
          <CarouselText>#not a dating app</CarouselText>
        </TextStrip>
      </TextCarouselContainer>
      <Footer>
        {/* Navigation Buttons */}
        <FooterButtons>
          <FooterButton isActive={true} onClick={() => navigate("/faq")}>
            FAQ
          </FooterButton>
          <FooterButton
            onClick={() => {
              window.location.href =
                "mailto:your-email@example.com?subject=Contact%20Us&body=Hi%20there,%0A%0AI%20have%20a%20question%20about%20Wanderly.";
            }}
          >
            DM US
          </FooterButton>
          <FooterButton onClick={() => navigate("/")}>HOME</FooterButton>
        </FooterButtons>
        <FooterText>Wanderly - All Rights Reserved</FooterText>
      </Footer>
    </Page>
  );
};

export default FAQScreen;
