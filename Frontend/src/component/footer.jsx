import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1% 2.5%;
  width: 95%;
`;

const Heading = styled.h1`
  font-family: "Times New Roman", Times, Baskerville, Georgia, serif;
  font-size: 2em;
  margin: 0;
  @media (max-width: 400px) {
    font-family: "Times New Roman";
    font-size: 1em;
  }
`;

const RightsReserved = styled.p`
  font-family: Inter;
  font-size: 1em;
  margin: 10px 0 0 0;
  @media (max-width: 600px) {
    font-size: 0.7em;
  }
`;

const Footer = () => {

  return (
    <FooterWrapper>
      <Heading>The Third Front</Heading>
      <RightsReserved>All rights reserved to <b>JeXun</b></RightsReserved>
    </FooterWrapper>
  );
};

export default Footer;
