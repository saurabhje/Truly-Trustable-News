/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Navbar from './navbar';
import './contactus.css';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactUs = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <h2>📱 Contact Us </h2>
       <p>
          Thank you for reaching out to us! Whether you have a news tip, feedback, or just want to connect, we'd love to hear from you.
        </p>
        <p>
          Feel free to use any of the following channels to get in touch:
        </p>
        <ul className='listStyle'>
          <li className='listItemStyle'>
            <strong>Email</strong>: <a href="mailto:contact@gmail.com">contact@gmail.com</a>
          </li>
          <li className='listItemStyle'>
            <strong>Twitter</strong>: <a href="https://twitter.com/YourTwitterHandle">Follow us on Twitter</a>
          </li>
          <li className='listItemStyle'>
            <strong>Instagram</strong>: <a href="https://www.instagram.com/YourInstagramHandle">Follow us on Instagram</a>
          </li>
        </ul>
        <p>
          We look forward to hearing from you and appreciate your engagement with our news blog!
        </p>
      </ContentWrapper>
      <Footer />
    </PageContainer>
  );
};

export default ContactUs;
