import React, { Component } from 'react';

class CreateTweet extends Component {
    constructor() {
        super();

        this.state = {
            content: ''
        }
    }

    changeTweet = (e) => {
        console.log(this.state.content)
        if (this.state.content.length < 300) {
            this.setState({
                //using square brakets takes the name field from <input> and uses it as a key value
                [e.target.name]: e.target.value
            })
        }
    }

    createTweet = (e) => {
        e.preventDefault();

        this.props.createTweet(this.state);

        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Tweet</h3>
                <form onSubmit={this.createTweet} >
                    <input 
                        type='text' 
                        value={this.state.content} 
                        onChange={this.changeTweet}
                        name='content' 
                    />
                    <input type='submit' value='Tweet!' />
                </form>                
            </div>
        )
    }
}

export default CreateTweet
