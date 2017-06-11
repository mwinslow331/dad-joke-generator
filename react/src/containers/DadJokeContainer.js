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
    fetch('https://www.reddit.com/r/dadjokes.json')
      .then(response => response.json())
      .then(responseData => {
        let totalAmount = responseData.data.children.length
        let jokeChildren = responseData.data.children
        for (i = 0; i < totalAmount; i++) {
          this.setState(dadJokes: jokeChildren[i].data);
          }
        })
      }

  render() {
    return(
      <div>
        <h1>Hii bitch  </h1>
      </div>
    )
  }
}

export default DadJokeContainer;
