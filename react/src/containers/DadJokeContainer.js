import React, { Component } from 'react';
import DadJoke from '../components/DadJoke';

class DadJokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadJokes: {},
      rand: 0
    }
    this.handleRandomJoke = this.handleRandomJoke.bind(this)
  }

  handleRandomJoke(event) {
    let totalDadJokes = this.state.dadJokes.length
    let randNum = Math.floor((Math.random()) * totalDadJokes)
    this.setState({ rand: randNum})
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/ChrisMcKenzie/dadjokes/gh-pages/v1/puns.json')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ dadJokes: responseData})
      })
      }

  render() {
    let singleJoke = this.state.dadJokes.map(joke => {
      <DadJoke
        joke={joke.joke}
      />
    })
    return(
      <div>
        <h4>{singleJoke}</h4>
        <button onClick={this.handleRandomJoke}>Click for Random Dad Joke!</button>
      </div>
    )
  }
}

export default DadJokeContainer;
