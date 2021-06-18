import React from 'react';

const Tweet = (props) => {
    return(
        <div key={props.tweet.uuid}>
            <p>{props.tweet.username}</p>
            <p>{props.tweet.content}</p>
            <p>{props.tweet.likes}</p>
        </div>
    )
}

export default Tweet;