import React from 'react';

import Tweet from './Tweet';

const Tweets = (props) => {
    return(
        <div>
          { props.tweets.map(tweet => 
            <Tweet tweet={tweet} />
            ) }
        </div>
    )
}

export default Tweets;