import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        username: 'kewlguy',
        tweets: [
          {
            timestamp: Date.now(),
            uuid: '12345',
            username: 'kewlguy',
            content: 'Hello, world!',
            likedTweets: []
          }
        ],
        likedTweets: []
      }
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Project X</h1>
        <h2>{this.state.user.username}</h2>
        <Tweets tweets={this.state.user.tweets} />
      </div>
    );
  }
}

export default App;
