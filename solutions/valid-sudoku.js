/**
 * @param {character[][]} board
 * @return {boolean}
 */

let board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const isValidSudoku = (board) => {
    for (let row = 0; row < 9; row++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === '.') continue;
            if (seen.has(board[row][i])) return false;
            seen.add(board[row][i]);
        }
    }

    for (let col = 0; col < 9; col++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === '.') continue;
            if (seen.has(board[i][col])) return false;
            seen.add(board[i][col]);
        }
    }        

    for (let square = 0; square < 9; square++) {
        let seen = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let row = Math.floor(square / 3) * 3 + i;
                let col = (square % 3) * 3 + j;
                if (board[row][col] === '.') continue;
                if (seen.has(board[row][col])) return false;
                seen.add(board[row][col]);
            }
        }
    }

    return true;
};

console.log(isValidSudoku(board));


    