import React, { Component } from 'react';

class DadJokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadJokes: {}
      randNum: Math.floor(Math.random() * totalJokes),
    }
  }

  onClick(event) {
    let dadJoke = "https://www.reddit.com/r/dadjokes.json"
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/dadjokes.json')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ dadJokes : responseData})
        let totalJokes = this.state.dadJokes.data.children.length
      })
  }

  render() {
    return(
      <div>
        <h1> BoooYA </h1>
      </div>
    )
  }
}

export default DadJokeContainer;
