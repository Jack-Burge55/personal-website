import React, { useState, useEffect } from "react";
const Sudoku = () => {
  const rowArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const emptyGrid = 
  [[0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]]
  const [sudokuState, setSudokuState] = useState(emptyGrid)

  useEffect(() => {
    if (sudokuState !== "error") {
      for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const square = document.getElementById(`${i}-${j}`)
        square.value = sudokuState[i][j] === 0 ? "" : sudokuState[i][j]
      }
    }}
  }, [sudokuState])

  const solveSudoku = (grid) => {
    // Then, get permanent array of coords of grid that need to be filled, emptySquares
    const emptySquares = []
    grid.forEach((row, rowIndex) => {
      row.forEach((colItem, colIndex) => {
        if (colItem === 0) emptySquares.push([rowIndex, colIndex])
      })
    });
    let emptyIndex = 0
    // repeated step for each originally empty square
    while (emptyIndex >= 0 && emptyIndex < emptySquares.length) {
      const x = emptySquares[emptyIndex][1]
      const y = emptySquares[emptyIndex][0]
      // get array of all valid numbers for empty square
      const validNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
      // ignore numbers lower than or equal to current value
      validNumbers.forEach((num) => {
        if (num <= grid[y][x] ) {
          validNumbers.delete(num);
        }
      });
      // remove numbers already in that row
      grid[y].forEach(rowItem => {
        validNumbers.delete(rowItem)
      })
      // remove numbers already in that column
      for (let i = 0; i < 9; i++) {
        validNumbers.delete(grid[i][x])
      }
      // remove numbers in that box
      const xBase = x - (x % 3)
      const yBase = y - (y % 3)
      for (let i = xBase; i < xBase + 3; i++) {
        for (let j = yBase; j < yBase + 3; j++) {
          validNumbers.delete(grid[j][i])
        }
      }
      if (validNumbers.size === 0) {
        grid[y][x] = 0
        emptyIndex--
      } else {
        grid[y][x] = Array.from(validNumbers)[0]
        emptyIndex++
      }
    }
    if (emptyIndex < 0) {
      // no valid solution
      return -1
    }
    if (emptyIndex === emptySquares.length) {
      // A solution found
      // Check solution is valid (i.e. in case of incorrect input)
      return finalCheckSudoku(grid) ? grid : -1
    }
  }

  const startCheckSudoku = (grid) => {
    let validSudoku = true
    // Check rows
    grid.forEach(row => {
      const rowSet = new Set()
      for (let i = 0; i < row.length; i++) {
        if (rowSet.has(row[i]) && row[i] !== 0) {
          validSudoku = false
        } else rowSet.add(row[i])
      }
    })
    if (!validSudoku) return false
    // Check columns
    for (let i = 0; i < 9; i++) {
      const colElements = []
      grid.forEach(row => {
        colElements.push(row[i])
      })
      const colSet = new Set()
      for (let i = 0; i < colElements.length; i++) {
        if (colSet.has(colElements[i]) && colElements[i] !== 0) {
          validSudoku = false
        } else colSet.add(colElements[i])
      }
    }
    if (!validSudoku) return false

    // Check grids
    for (let i = 0; i < 9; i = i + 3) {
      for (let j = 0; j < 9; j = j + 3) {
        const gridArray = []
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            gridArray.push(grid[i + k][j + l])
          }
        }
        const gridSet = new Set()
        for (let i = 0; i < gridArray.length; i++) {
          if (gridSet.has(gridArray[i]) && gridArray[i] !== 0) {
            validSudoku = false
          } else gridSet.add(gridArray[i])
        }
      }
    }
    if (!validSudoku) return false

    return true
  }

  const finalCheckSudoku = (grid) => {
    let isValidSudoku = true
    // Check rows
    grid.forEach(row => {
      for (let i = 1; i < 10; i++) {
        if (!row.includes(i)) isValidSudoku = false
      }
    })
    if (!isValidSudoku) return false
    // Check columns
    for (let i = 0; i < 9; i++) {
      const colElements = []
      grid.forEach(row => {
        colElements.push(row[i])
      })
      for (let i = 1; i < 10; i++) {
        if (!colElements.includes(i)) isValidSudoku = false
      }
    }
    if (!isValidSudoku) return false
    // Check grids
    for (let i = 0; i < 9; i = i + 3) {
      for (let j = 0; j < 9; j = j + 3) {
        const gridArray = []
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            gridArray.push(grid[i + k][j + l])
          }
        }
        for (let m = 1; m < 10; m++) {
          if (!gridArray.includes(m)) isValidSudoku = false
        }
      }
    }
    return isValidSudoku
  }

  const makeSquares = () => {
    return rowArray.map((element) => {
      return (
        <div className="sudokuRow" key={element}>
          {rowArray.map((colElement) => {
            return (
              <input
                onChange={(e) => {
                  if (e.target.value.length > 1) {
                    const latestChar = e.target.value.charAt(e.target.value.length - 1)
                    if ("123456789".includes(latestChar)) {
                      e.target.value = latestChar
                    } else e.target.value = ""
                  }
                  else {
                    if (!"123456789".includes(e.target.value)) {
                      e.target.value = ""
                    }
                  }
                }}
                className={`${element}-${colElement} input sudokuCell ${element === 2 || element === 5 ? "borderBottom" : ""} ${colElement === 2 || colElement === 5 ? "borderRight" : ""}`}
                id={`${element}-${colElement}`}
                key={colElement}
              ></input>
            );
          })}
        </div>
      );
    });
  };

const sudokuMain = () => {
  const gridWithInput = 
  [[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]]
  // fill grid with inputted numbers
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const inputtedValue = parseInt(document.getElementById(`${i}-${j}`).value, 10)
      if (inputtedValue) gridWithInput[i][j] = inputtedValue
    }
  }
  // First, check existing grid has no errors (duplicates in row, column or grid)
  if (!startCheckSudoku(gridWithInput)) {
    setSudokuState("error")
  } else {
    const result = solveSudoku(gridWithInput)
    if (result === -1) setSudokuState("error")
    else {setSudokuState(result)}
  }

}

  return (
    <>
      <h1 className="title">Sudoku Solver</h1>
      {makeSquares()}
      <button className="button" type="button" onClick={() => sudokuMain()}>
        Solve Sudoku :)
      </button>
      <button className="button" type="button" onClick={() => setSudokuState(emptyGrid)}>
        Clear Grid
      </button>
      {(sudokuState === "error") && <h3 className="title is-4 has-text-danger">Not a valid sudoku</h3>}
    </>
  );
};
export default Sudoku;
