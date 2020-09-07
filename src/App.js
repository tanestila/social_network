import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile"  component={Profile}/>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
