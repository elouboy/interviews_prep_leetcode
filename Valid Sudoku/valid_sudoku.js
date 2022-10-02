/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const length = board.length,
      row = Array.from({ length }, () => []),
      col = Array.from({ length }, () => []),
      box = Array.from({ length }, () => []);
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        const val = Number(board[i][j]);
        if (!val) continue;
        
        const k = ~~(i / 3) * 3 + ~~(j / 3);
        if (row[i][val] || col[j][val] || box[k][val]) return false;
        row[i][val] = col[j][val] = box[k][val] = true;
      }
    }
    
    return true;
  };