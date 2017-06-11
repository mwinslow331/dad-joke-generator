import React from 'react';
import { Link } from 'react-router';

const DadJoke = (props) => {
  return(
    <div>
      <h4>{props.setup}</h4>
      <h4>{props.punchline}</h4>
    </div>
  )
}

export default DadJoke;
