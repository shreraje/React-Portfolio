import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Project1 from './components/Project1';
import Footer from './components/Footer/Footer';
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className='App'>
    <Header/>
    <Project1/>
    <Footer/>
    </div>
  );
}

export default App;
