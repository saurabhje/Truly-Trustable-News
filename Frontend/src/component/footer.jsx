import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const FooterWrapper = styled.div`
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1vh 2vw;
  `;

  const Heading = styled.h1`
    font-size: 2em;
    margin: 0;
  `;

  const Socials = styled.div`
    display: flex;
    gap: 10px;
  `;

  const Icon = styled.i`
    color: black;
    font-size: 2em;
  `;

  const RightsReserved = styled.p`
    font-size: 1em;
    margin: 10px 0 0 0;
  `;

  return (
    <FooterWrapper>
      <Heading>The Humanist</Heading>
      <Socials>
        <a href='#'>
          <Icon className='fab fa-instagram'></Icon>
        </a>
        <a href='#'>
          <Icon className='fab fa-twitter'></Icon>
        </a>
      </Socials>
      <RightsReserved>All rights reserved to JeX</RightsReserved>
    </FooterWrapper>
  );
};

export default Footer;
