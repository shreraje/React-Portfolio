import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Footer from './components/Footer/Footer';
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className='App'>
    <Header/>
    <Project1/>
    <Project2/>
    <Project3/>
    <Project4/>
    <Footer/>
    </div>
  );
}

export default App;
