import { useState } from 'react';
import { Cell } from '../components/Cell';
import styles from './index.module.css';

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
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

    function findLine(board: number[][], x: number, y: number, Color: number, dir: number) {
      let i = x + dx[dir];
      let j = y + dy[dir];
      while (i >= 0 && i < 8 && j >= 0 && j < 8) {
        if (board[j][i] === 0) {
          return null;
        } else if (board[j][i] === Color) {
          return { i, j };
        }
        i += dx[dir];
        j += dy[dir];
      }
      return null;
    }

    function flipLine(board: number[][], x: number, y: number, i: number, j: number) {
      const dx = Math.sign(i - x);
      const dy = Math.sign(j - y);
      let currX = x + dx;
      let currY = y + dy;
      while (currX !== i || currY !== j) {
        board[currY][currX] = 3 - board[currY][currX];
        currX += dx;
        currY += dy;
      }
    }
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
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <Cell color={color} key={`${x}-${y}`} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
    </div>
  );
};
export default Home;
