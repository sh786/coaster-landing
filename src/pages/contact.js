import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactContainer className="container">
      <div className="content">
        <div className="title">
          <h1>Contact</h1>
        </div>

        <div className="row">
          <div className="col-7">
            <p>
              We take our commitment to our users seriously. If you have
              questions about how to use Coaster or onboard your bar, or want to
              share feedback or technical difficulties, please do not hesitate
              to contact us.
            </p>
          </div>

          <div className="col-5">
            <div className="contact-items">
              <p>Plain email is the best way to contact us.</p>
              <h2>sam@coastertech.com</h2>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  </Layout>
);

const ContactContainer = styled.div`
  height: calc(100vh - 109px);
  display: flex;
  align-items: center;

  .content {
    padding-bottom: 86px;
  }

  @media screen and (max-width: 719px) {
    height: auto;
  }
`;

export default ContactPage;
