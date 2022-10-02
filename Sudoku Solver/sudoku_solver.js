var solveSudoku = function(board) {
    const MAXDIM = 9;
    const checker=(row, col, val)=>{
        const boxRow = row - row%3, boxCol = col - col%3;
        for (let i = 0; i < MAXDIM; i++) {
            if (board[row][i] == val) return false;
            if (board[i][col] == val) return false;
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRow+i][boxCol+j] == val) return false;
            }
        }
        return true;
    }
    const solver = (row, col) =>{
        if (row === MAXDIM) return true;
        if (col === MAXDIM) return solver(row+1, 0);
        if (board[row][col] !== '.') return solver(row, col+1);
        for (let i = 1; i <= 9; i++) {
            if (checker(row,col,i)) {
                board[row][col] = i.toString();
                if (solver(row, col+1)) {
                    return true;
                }
                board[row][col] = '.';
            }
        }
        return false;
    }
    solver(0,0);
};