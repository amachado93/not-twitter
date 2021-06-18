import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets/Tweets';
import CreateTweet from './components/CreateTweet';

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
            likes: 0
          }
        ],
        likedTweets: []
      }
    }
  }

  createTweet = (tweet) => {
    
    tweet.timestamp = Date.now();
    tweet.uuid = Math.floor(Math.random() * 100000);
    tweet.username = 'kewlguy';
    tweet.likes = 0;

    const user = this.state.user;
    user.tweets.push(tweet);
    this.setState({
      user
    })
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Not Twitter</h1>
          <h2>welcome, {this.state.user.username}</h2>
        </header>
        <CreateTweet createTweet={this.createTweet} />
        <Tweets tweets={this.state.user.tweets} />
      </div>
    );
  }
}

export default App;
