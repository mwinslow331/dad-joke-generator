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
        debugger;
        this.setState({ dadJokes : responseData.data.children})
      })
  }

  render() {
    let randNum = Math.floor(Math.random() * 25)
    let dadJoke = this.state.dadJokes.map(joke => {
      return(
        <DadJoke
          setup={joke.title}
          punchline={joke.selftext}
        />
      )
    })
    return(
      <div>
        <dadJoke />
      </div>
    )
  }
}

export default DadJokeContainer;
