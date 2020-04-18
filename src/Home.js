import withRoot from './withRoot';
import React from 'react';
import ProductCategories from './ProductCategories';
import AppFooter from './AppFooter';
import ProductHero from './ProductHero';
import AppAppBar from './AppAppBar';

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
