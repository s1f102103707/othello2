import { useState } from 'react';
import styles from './index.module.css';

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

function findLine(board: number[][], x: number, y: number, color: number, dir: number) {
  let i = x + dx[dir];
  let j = y + dy[dir];
  while (i >= 0 && i < 8 && j >= 0 && j < 8) {
    if (board[j][i] === 0) {
      return null;
    } else if (board[j][i] === color) {
      return { i, j };
    }
    i += dx[dir];
    j += dy[dir];
  }
  return null;
}

function flipLine(board: number[][], x: number, y: number, i: number, j: number) {
  while (x !== i || y !== j) {
    board[y][x] = 3 - board[y][x];
    x += Math.sign(i - x);
    y += Math.sign(j - y);
  }
}

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    //for (let dx = -1; dx <= 1; dx++) {
    //for (let dy = -1; dy <= 1; dy++) {
    //if (dx === 0 && dy === 0) continue;
    //newBoard[y][x] = turnColor;
    //}
    //}

    if (newBoard[y][x] === 0) {
      //if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      //newBoard[y][x] = turnColor;
      //setTurnColor(3 - turnColor);
      //}
      newBoard[y][x] = turnColor;
      for (let d = 0; d < 8; d++) {
        const end = findLine(newBoard, x, y, turnColor, d);
        if (end) {
          flipLine(newBoard, x, y, end.i, end.j);
        }
      }
      setTurnColor(3 - turnColor);
    }
    //else if (board[x + 1] !== undefined && board[y][x + 1] === 3 - turnColor) {
    //newBoard[y][x] = turnColor;
    //setTurnColor(3 - turnColor);
    //}
    //}
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
