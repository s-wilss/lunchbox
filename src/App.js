import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import JoinUs from './Components/JoinUs/JoinUs';
import PageNavigation from './Components/PageNavigation/PageNavigation';
import Schedule from './Components/Schedule/Schedule';


function App() {
  return (
    <div className="App">
      <Header/>
      <PageNavigation/>
      <AboutUs/>
      <Schedule/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
