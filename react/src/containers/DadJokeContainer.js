import React, { Component } from 'react';
import DadJoke from '../components/DadJoke';

class DadJokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dadJokes: {},
      rand: 0,
      selectedDadJoke: {
        level: "1",
        name: "ashes",
        joke: "When the window fell into the incinerator, it was a pane in the ash to retrieve."
        }
    }
    this.handleRandomJoke = this.handleRandomJoke.bind(this)
  }

  handleRandomJoke(event) {
    let totalDadJokes = this.state.dadJokes.length
    let randNum = Math.floor((Math.random()) * totalDadJokes)
    this.setState({
      rand: randNum,
      selectedDadJoke: this.state.dadJokes[randNum]
    })
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/ChrisMcKenzie/dadjokes/gh-pages/v1/puns.json')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ dadJokes: responseData})
      })
      }

  render() {
    return(
      <div className='row'>
        <div className='columns small-12 text-center small-centered'>
          <div className='jokes'>
            <h4>{this.state.selectedDadJoke.joke}</h4>
          </div>
          <div className='joke-button' onClick={this.handleRandomJoke}>Click for Random Dad Joke!</div>
        </div>
      </div>
    )
  }
}

export default DadJokeContainer;
