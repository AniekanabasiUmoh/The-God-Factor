import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import ClimatePage from './pages/ClimatePage';
import AboutPage from './pages/AboutPage';
import BrandsPage from './pages/BrandsPage';
import InsightsPage from './pages/InsightsPage';
import DistinguishPage from './pages/DistinguishPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';

import PhilosophyPage from './pages/PhilosophyPage';
import ServicesListPage from './pages/ServicesListPage';


const App: React.FC = () => {
  return (
    <ModalProvider>
      <HashRouter>
        <ScrollToTop />
        <ContactModal />


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/distinguish" element={<DistinguishPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/climate" element={<ClimatePage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/expertise" element={<ServicesListPage />} />
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
};

export default App;