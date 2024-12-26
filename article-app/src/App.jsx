import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleSummarizer from './ArticleSummarizer';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <ArticleSummarizer />
      </div>
    );
  }
}
 
export default App;
