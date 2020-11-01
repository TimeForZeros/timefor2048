import React from 'react';

const gameBoard = (
  <div>
    <div id='r0'>
      <span id='r0c0' />
      <span id='r0c1' />
      <span id='r0c2' />
      <span id='r0c3' />
    </div>
    <div id='r1'>
      <span id='r1c0' />
      <span id='r1c1' />
      <span id='r1c2' />
      <span id='r1c3' />
    </div>
    <div id='r2'>
      <span id='r2c0' />
      <span id='r2c1' />
      <span id='r2c2' />
      <span id='r2c3' />
    </div>
    <div id='r3'>
      <span id='r3c0' />
      <span id='r3c1' />
      <span id='r3c2' />
      <span id='r3c3' />
    </div>
  </div>
);
const randomNumber = () => Math.random() * Math.floor(3);
const generateInitialValues = () => {
  const firstIndex = [randomNumber(), randomNumber()];
  const secondIndex = [randomNumber(), randomNumber()];
  if (JSON.stringify(firstIndex) === JSON.stringify(secondIndex)) {
    return generateInitialValues();
  }
  return { firstIndex, secondIndex };
};

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      tiles: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  }

  render() {
    const { score } = this.state;
    return (
      <div>
        {gameBoard}
        <div>Score: {score}</div>
      </div>
    );
  }
}
export default GameBoard;
