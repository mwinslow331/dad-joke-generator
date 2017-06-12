import React, { Component } from 'react';
import DadJoke from '../components/DadJoke';

class DadJokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadJokes: {}
    }
  }

  // onClick(event) {
  //   let dadJoke = "https://www.reddit.com/r/dadjokes.json"
  // }

  componentWillMount() {
    fetch('https://github.com/ChrisMcKenzie/dadjokes/blob/gh-pages/v1/puns.json')
      .then(response => response.json())
      .then(responseData => {
        debugger;
      })
      }

  render() {
    return(
      <div>
        <h1>Hello Darkness, My Old Friend</h1>
      </div>
    )
  }
}

export default DadJokeContainer;
