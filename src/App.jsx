import React from 'react';
import Header from './header/Header';
import MainContent from './main_content/MainContent';
import Footer from './footer/Footer';
export default App;

/**
 * Основная страница приложения
 * @returns основную страницу
 */
function App() {
    return (
      <>
        <Header />
        <MainContent/>
        <Footer/>
    </>
  );
}