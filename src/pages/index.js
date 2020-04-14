import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import featureImage from '../../static/images/coaster-feature.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Breeze Through Bar Lines | Coaster App" />

    <div className="page-header home container">
      <div className="home-header-text">
        <h1>Breeze Through Lines and Forget Your Cash</h1>
        <p>Pay for covers in advance and unlock special offers.</p>
      </div>
      <div className="home-header-image">
        <img alt="Dashboard" src={featureImage} />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
