// src/layouts/MainLayout.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Box } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box as="main" minHeight="80vh" px={4} py={6}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
