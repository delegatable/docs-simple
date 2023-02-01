import Layout from '@theme/Layout';
import React from 'react';

import Home from '../components/Home';

function HomePage() {
  return (
    <Layout
      title="Delegatable"
      description="Solidity framework for extending smart contracts with counterfactual revocable-delegation"
    >
      <Home />
    </Layout>
  );
}

export default HomePage;
