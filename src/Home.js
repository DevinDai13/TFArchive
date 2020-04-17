import withRoot from './modules/withRoot';
import React from 'react';
import ProductCategories from './modules/ProductCategories';
import AppFooter from './modules/AppFooter';
import ProductHero from './modules/ProductHero';
import AppAppBar from './modules/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductCategories />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
