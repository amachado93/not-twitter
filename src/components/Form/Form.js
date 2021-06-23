import React, { useState } from 'react';

const Form = (props) => {
    const [bio, updateBio] = useState(props.user.bio);
    const [username, updateUsername] = useState(props.user.username);

    const onChange = e => {
        if (e.target.name === 'bio') {
            updateBio(e.target.value)
        } else if (e.target.name === 'username') {
            updateUsername(e.target.value)
        }
    }

    const reset = e => {
        e.preventDefault();
        updateBio(props.user.bio);
        updateUsername(props.user.username);
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('here in onSubmit!!!')
        props.submitEditProfile(bio, username);
    }

    return (
        <div>
            <h3>Edit Form</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                />
                <button>Edit Profile</button>
                <button onClick={props.editProfile} >Cancel</button>
                <button onClick={reset}>Reset</button>
            </form>
        </div>
    )
}

export default Form