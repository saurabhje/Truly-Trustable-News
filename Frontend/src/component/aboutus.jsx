import React from 'react'
import Navbar from './navbar'
import styled from 'styled-components';
import Footer from './footer'
import './aboutus.css'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;

const Homepage = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <p>
          This is crazy
        </p>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  )
}

export default Homepage;