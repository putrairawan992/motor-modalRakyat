import React, { Fragment } from 'react';
import RouterManager from 'router';
import Toolbar from 'components/layout/Toolbar';
import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';
import 'styles/App.scss';

function App() {
  return (
    <Fragment>
      <Toolbar />
      <Navbar />
      <RouterManager />
      <Footer />
    </Fragment>
  );
}

export default App;
