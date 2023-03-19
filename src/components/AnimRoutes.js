import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Rdg from '../pages/Rdg';
import Tarifs from '../pages/Tarifs';
import Tarifs2 from '../pages/Tarifs2';
// import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/Rdg" element={<Rdg />} />
        <Route path="/Tarifs" element={<Tarifs />} />
        <Route path="/Tarifs2" element={<Tarifs2 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;