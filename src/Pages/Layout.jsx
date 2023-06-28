import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Newsletters } from '../Components/Newsletters';
import { BackToTopBtn } from '../Components/BackToTopBtn';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Newsletters />
      <BackToTopBtn />
      <Footer />
    </div>
  );
};

export default Layout;