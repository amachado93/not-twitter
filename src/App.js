import React, { Component } from 'react';
import './App.css';

import Tweets from './components/Tweets/Tweets';
import CreateTweet from './components/CreateTweet';
import Profile from './components/Profile/Profile';
import Form from './components/Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: '123456',
        username: "kewlguy",
        bio: 'Here is some bio text...',
        likedTweets: []
      },
      tweets: [
        {
          timestamp: Date.now(),
          uuid: "1234567",
          userId: "123456",
          content: "Lorem ipsum dolor sit amet",
          likes: 0
        }
      ],
      editProfile: false
    }
  }

  createTweet = (tweet) => {
    tweet.timestamp = Date.now();
    tweet.uuid = Math.floor(Math.random() * 100000);
    tweet.userId = "123456";
    tweet.likes = 0;
    const tweets = this.state.tweets;
    tweets.push(tweet);
    this.setState({
      tweets
    })
  }

  editProfile = e => {
    this.setState({
      editProfile: !this.state.editProfile
    })
  }

  submitEditProfile = (bio, username) => {
    const user = this.state.user
    user.bio = bio;
    user.username = username;

    this.setState({
      user,
      editProfile: false
    })
  }

  updateTweet = id => {
    const tweets = this.state.tweets.map(tweet => {
      if (tweet.uuid === id) {
        tweet.likes += 1;
      }
      return tweet;
    })

    this.setState({
      tweets
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Not Twitter</h1>
          <h2>welcome, {this.state.user.username}</h2>
        </header>
        {this.state.editProfile
          ? <Form user={this.state.user} editProfile={this.editProfile} submitEditProfile={this.submitEditProfile} />
          : <Profile user={this.state.user} editProfile={this.editProfile} />
        }
        <CreateTweet createTweet={this.createTweet} />
        <Tweets tweets={this.state.tweets} updateTweet={this.updateTweet} />
      </div>
    );
  }
}

export default App;
