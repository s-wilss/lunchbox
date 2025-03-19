import React from 'react';
import './App.css';
import styled from 'styled-components'
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import JoinUs from './Components/JoinUs/JoinUs';
import PageNavigation from './Components/PageNavigation/PageNavigation';
import Schedule from './Components/Schedule/Schedule';
import ErrorBoundary from './Components/ErrorBoundaries/ErrorBoundaries';



 /* Gradient fill on divs inside main containers*/
 const MainBackgroundCont = styled.div `
   background-image: linear-gradient(to bottom, rgb(29, 29, 27), rgb(57, 95, 40));
   flex: 1;
   height: 95%;
   margin: 10px;
   text-align: center;
   line-height: 60px;
   font-size: 30px;
   color: rgb(255, 255, 255);
 `


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
       
        <MainBackgroundCont>
          <PageNavigation/>
          <Header/>
          <AboutUs/>
          <Schedule/>
          <JoinUs/>
          <Footer/>
        </MainBackgroundCont>
      </ErrorBoundary>
    </div>
  );
}

export default App;
