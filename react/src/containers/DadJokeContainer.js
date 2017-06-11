import React, { Component } from 'react';

class DadJokeContainer extends Component {
  contstructor(props) {
    super(props);
    this.state = {
      randNum = Math.floor(Math.random() * json["data"]["children"].length);
      dadJokes = {}
    }

    onClick(event) {
      let dadJoke = "https://www.reddit.com/r/dadjokes.json"
    }

    componentDidMount() {
      fetch('https://www.reddit.com/r/dadjokes.json')
        .then(response => response.json())
        .then(responseData => {
          this.setState({ dadJokes : responseData})
        })
    }

  }

  render() {

    return()
  }
}


export default DadJokeContainer;
