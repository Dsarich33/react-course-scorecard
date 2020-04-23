import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
        isWinning: false
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
        isWinning: false
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
        isWinning: false
      },
      {
        name: "James",
        id: 4,
        score: 0,
        isWinning: false
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
  };
  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };
  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: prevState.players.length + 1,
            iswinning: false
          }
        ]
      };
    });
  };
  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            id={player.id}
            index={index}
            key={player.id.toString()}
            score={player.score}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            isWinning={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
