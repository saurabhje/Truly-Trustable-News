import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Navbar from './navbar';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;
const NavWrapper = styled.div`
  top: 0;
  z-index: 1;
`;

const ContactUs = () => {
  return (
    <PageContainer>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <ContentWrapper>
        <p>
          Designing the news_operations like show, create, update, delete (methods) methods in the backend
          Add category schema and category detail page.
          Design the individual category page.
          Only load a certain number of news on the homepage (pending)
          Add an image to every news on the database and fetch image dynamically (pending)
          Add more data to the news in the database like date added, etc. (pending)
          Redesign the individual news pages (pending)
          Add sort methods for news (pending)
          Improve the hero page to have more than one news on it with a time function
          Do the sidebar (pending)
        </p>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default ContactUs;
