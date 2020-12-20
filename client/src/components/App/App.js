import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import Header from '../Header';
import Footer from '../Footer';
import Landing from '../Landing';
import Posts from '../Posts';

const App = () =>{
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Header />
          <div className="content main">
            <Route exact path="/" component={Landing} />
            <Route exact path="/posts" component={Posts} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
