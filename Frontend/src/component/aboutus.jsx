/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from './navbar'
import styled from 'styled-components';
import Footer from './footer'
import './aboutus.css'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align:center;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 1.3rem;
  max-width: 60rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const RedHead = styled.h2`
color: red;
text-transform: Uppercase;
text-align: center;
`

const Homepage = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <RedHead>
          Presenting the Truth under the veil of satire.
        </RedHead>
        <p>
        Greetings, fellow Earthlings! We are, the masterminds (or accidental architects, depending on who you ask) behind this satirical sanctuary of news. Picture two friends, a laptop, and an unwavering commitment to delivering news that makes you question your life choices or maybe ours.
        </p>
        <p>
        Now, we don't claim to be experts in journalism. In fact, our journalistic integrity is about as stable as a Jenga tower in a hurricane. But hey, who needs integrity when you have sarcasm levels that could power a small country?
        </p>
        <p>
        As for qualifications, let's just say we've binge-watched enough stand-up comedy to earn honorary degrees in satire. We may not have won Pulitzer Prizes, but we've mastered the art of turning mundane news into an uproarious circus.
        </p>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  )
}

export default Homepage;