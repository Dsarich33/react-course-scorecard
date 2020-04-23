import React, { PureComponent } from "react";
import Counter from "./Counter";
import Icon from "./Icon";
import PropTypes from "prop-types";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() {
    const {
      removePlayer,
      id,
      name,
      score,
      changeScore,
      index,
      isWinning
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isWinning={isWinning} />
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
