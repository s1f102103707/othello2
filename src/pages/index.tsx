import { useState } from 'react';
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
    if (newBoard[y][x] === 0) {
      //for (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor;)
      //if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      //  newBoard[y][x] = turnColor;
      //  setTurnColor(3 - turnColor);
      //} else if (board[y - 2] !== undefined && board[y - 2][x] === 3 - turnColor) {
      //  newBoard[y][x] = turnColor;
      //  setTurnColor(3 - turnColor);
      //} else {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      //}
      setBoard(newBoard);
    }
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