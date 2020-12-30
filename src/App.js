import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import Project3 from './components/Projects/Project3';
import Project4 from './components/Projects/Project4';
import Project5 from './components/Projects/Project5';
import Project6 from './components/Projects/Project6';
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
    <Project5/>
    <Project6/>
    <Footer/>
    </div>
  );
}

export default App;
