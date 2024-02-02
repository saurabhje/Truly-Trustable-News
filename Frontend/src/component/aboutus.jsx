/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from './navbar/navbar'
import styled from 'styled-components';
import Footer from './footer'
import { Helmet } from 'react-helmet';
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align:center;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 1rem 6rem;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1.1rem;
  }
`
const Paras = styled.p`
  text-align:start;
  line-height: 1.5;
  margin-bottom: 10px;
`
const RedHead = styled.h2`
text-align: center;
text-transform: uppercase;
font-family: 'Anton', sans-serif;
font-weight: 700:
`

const Homepage = () => {
  return (
    <>
    <Helmet>
      <title>Who we are</title>
      <meta name="description" content="information about the third front" />
    </Helmet>
    <PageContainer>
    <Navbar />
        <ContentWrapper>
          <RedHead>
            Presenting the Truth under the veil of satire.
          </RedHead>
          <Paras>
            Greetings, fellow Earthlings! We are, the masterminds (or accidental architects, depending on who you ask) behind this satirical sanctuary of news. Picture two friends, a laptop, and an unwavering commitment to delivering news that makes you question your life choices or maybe ours.
          </Paras>
          <Paras>
            Now, we don't claim to be experts in journalism. In fact, our journalistic integrity is about as stable as a Jenga tower in a hurricane. But hey, who needs integrity when you have sarcasm levels that could power a small country?
          </Paras>
          <Paras>
            As for qualifications, let's just say we've binge-watched enough stand-up comedy to earn honorary degrees in satire. We may not have won Pulitzer Prizes, but we've mastered the art of turning mundane news into an uproarious circus.
          </Paras>
        </ContentWrapper>
        <Footer />
      </PageContainer></>
  )
}

export default Homepage;