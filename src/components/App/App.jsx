import React from 'react';
import TopBar from '../TopBar/TopBar';
import HomePage from '../HomePage/HomePage';
import ConstructionBanner from '../ConstructionBanner/ConstructionBanner';

export default function App() {
  return (
    <>
      <TopBar />
      <ConstructionBanner />
      <HomePage />
    </>
  );
}
