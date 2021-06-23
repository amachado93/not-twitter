import React from 'react';

const Profile = (props) => {
    return (
        <div>
            <h3>{props.user.username}</h3>
            <p>{props.user.bio}</p>
            <p>Liked Tweets:</p>
            {props.user.likedTweets.length > 0
                ? props.user.likedTweets.map(tweet =>
                    <p>{tweet.content}</p>
                )
                : <p>Like some tweets!</p>
            }
            <button onClick={props.editProfile}>Edit Profile</button>
        </div>
    )
}

export default Profile;