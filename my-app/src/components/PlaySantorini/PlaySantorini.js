import "./styles.css";
import React, { useState, useEffect } from "react";
import fakeNormal from "./utilities/fakeNormal";
import validMoves from "./utilities/validMoves";
import validBuilds from "./utilities/validBuilds";
import greedyHeight from "./engines/greedyHeight";
import randomPlay from "./engines/randomPlay";
import minimax from "./engines/minimax";

const PlaySantorini = () => {
  const [playerColour, setPlayerColour] = useState(null);
  const [enemyColour, setEnemyColour] = useState(null);
  const [engine, setEngine] = useState(null);
  const [status, setStatus] = useState("gameOptions");
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [outcome, setOutcome] = useState(""); // either "playerWins", "playerBlocked", "cpuWins" or "cpuBlocked"
  const [pause, setPause] = useState(false);
  const [selectedTile, setSelectedTile] = useState(""); // string id of tile with builder to move
  const [availableMoveTiles, setAvailableMoveTiles] = useState([]); // array of string id's
  const [availableBuildTiles, setAvailableBuildTiles] = useState([]); // array of string id's

  // REACT COMPONENTS

  const ColourPicker = ({ user }) => {
    return (
      <div className="colourPicker">
        {user === "player" ? (
          <div>
            <h1>Pick your colour</h1>
            <div className="colourOptions">
              <div onClick={() => setPlayerColour("clay")}>
                <Tile defaultColour={"clay"}></Tile>
              </div>
              <div onClick={() => setPlayerColour("white")}>
                <Tile defaultColour={"white"}></Tile>
              </div>
              <div onClick={() => setPlayerColour("blue")}>
                <Tile defaultColour={"blue"}></Tile>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Pick the CPU colour</h1>
            <div className="colourOptions">
              {playerColour !== "clay" && (
                <div onClick={() => setEnemyColour("clay")}>
                  <Tile defaultColour={"clay"}></Tile>
                </div>
              )}
              {playerColour !== "white" && (
                <div onClick={() => setEnemyColour("white")}>
                  <Tile defaultColour={"white"}></Tile>
                </div>
              )}
              {playerColour !== "blue" && (
                <div onClick={() => setEnemyColour("blue")}>
                  <Tile defaultColour={"blue"}></Tile>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const EnginePicker = () => {
    return (
      <div className="enginePicker">
        <h2>Pick the engine you'd like to play against</h2>
        <div className="engineOptions">
          <div
            className="engineOption"
            onClick={() => {
              setEngine("random");
              setStatus("placeFirstBuilder");
            }}
            style={{ backgroundColor: "rgba(127, 255, 0, .6)" }}
          >
            <h3 className="bold">Random</h3>{" "}
            <p>CPU moves at random, very easy</p>
          </div>
          <div
            className="engineOption"
            onClick={() => {
              setEngine("greedy");
              setStatus("placeFirstBuilder");
            }}
            style={{ backgroundColor: "rgba(255, 255, 0, .6)" }}
          >
            <h3 className="bold">Greedy</h3>{" "}
            <p>CPU moves are shortsighted, easy</p>
          </div>
          <div
            className="engineOption"
            onClick={() => {
              setEngine("minimax");
              setStatus("placeFirstBuilder");
            }}
            style={{ backgroundColor: "rgba(255, 0, 0, .6)" }}
          >
            <h3 className="bold">Minimax</h3> <p>CPU plans ahead, hard</p>
          </div>
        </div>
      </div>
    );
  };

  const SideDisplay = () => {
    return (
      <div className="sideDisplay">
        <div className="sideDivisor">
          <h2 className="bold">Your Colour</h2>
          {playerColour && <div className={`${playerColour} centre`}></div>}
        </div>
        <div className="sideDivisor">
          <h2 className="bold">CPU Colour</h2>
          {enemyColour && <div className={`${enemyColour} centre`}></div>}
        </div>
        <div className="sideDivisor">
          <h2 className="bold">Status</h2>
          {outcome ? (
            <p>Game Over!</p>
          ) : (
            <>
              {status === "gameOptions" && <p>Choosing Game Options</p>}
              {status === "placeFirstBuilder" && (
                <p>Place your first builder</p>
              )}
              {status === "placeSecondBuilder" && (
                <p>Place your second builder</p>
              )}
              {status === "playerSelectBuilder" && (
                <p>Select a builder to move</p>
              )}
              {status === "playerMoveBuilder" && (
                <p>Select a square to move to (or select other builder)</p>
              )}
              {status === "playerBuilderBuild" && (
                <p>Select a square to build on</p>
              )}
              {status === "cpuDelay" && <p>CPU thinking...</p>}
            </>
          )}
        </div>
        <div className="sideDivisor">
          <div>
            <h2 className="bold">CPU Engine</h2>
            {engine && (
              <h3 className="bold">
                {engine.charAt(0).toUpperCase() + engine.slice(1)}
              </h3>
            )}
            {engine === "random" && (
              <p>The random engine moves and builds completely randomly</p>
            )}
            {engine === "greedy" && (
              <p>
                The greedy engine always moves a piece up, if possible, else
                does a random move
              </p>
            )}
            {engine === "minimax" && (
              <p>
                The minimax engine looks at all possible game boards three moves
                ahead, and picks the move according to the best position it can
                be in after 3 turns
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Tile = ({ id, value, defaultColour }) => {
    const tileLevel = value % 10;
    const playerTile = Math.floor(value / 10) === 1;
    const cpuTile = Math.floor(value / 10) === 2;

    return (
      <div className="tile" id={id} onClick={() => handleTileClick(id, value)}>
        {tileLevel >= 1 && <div className="levelOne"></div>}
        {tileLevel >= 2 && <div className="levelTwo"></div>}
        {tileLevel >= 3 && <div className="levelThree"></div>}
        {tileLevel === 4 && <div className="levelFour"></div>}
        {selectedTile === id && <div className="selected"></div>}
        {availableMoveTiles.includes(id) && (
          <div className="availableMove"></div>
        )}
        {availableBuildTiles.includes(id) && tileLevel < 3 && (
          <div className="availableBuild"></div>
        )}
        {availableBuildTiles.includes(id) && tileLevel === 3 && (
          <div className="availableBuildDome"></div>
        )}
        {playerTile && <div className={playerColour}></div>}
        {cpuTile && <div className={enemyColour}></div>}
        {defaultColour && <div className={defaultColour}></div>}
      </div>
    );
  };

  const Grid = () => {
    return (
      <div className="gridContainer">
        <div className="grid">
          {Array(25)
            .fill("")
            .map((_, index) => {
              return (
                <Tile
                  id={`${Math.floor(index / 5)}-${index % 5}`}
                  key={index}
                  value={grid[Math.floor(index / 5)][index % 5]}
                />
              );
            })}
        </div>
        {outcome && <div className="endGameOverlay"></div>}
        {outcome === "playerWins" && (
          <div className="endGameDisplay">
            <h2 className="endTitle">You won!</h2>
            <p className="endText">
              You beat the {engine} engine by standing on a level three tower
              first.
            </p>
            {engine !== "minimax" && (
              <p className="endText">
                Now see if you can beat the minimax engine!
              </p>
            )}
          </div>
        )}
        {outcome === "playerBlocked" && (
          <div className="endGameDisplay">
            <h2 className="endTitle">You lost!</h2>
            <p className="endText">
              You were beat by the {engine} engine by not being able to move any
              builders on your turn.
            </p>
          </div>
        )}
        {outcome === "cpuWins" && (
          <div className="endGameDisplay">
            <h2 className="endTitle">You lost!</h2>
            <p className="endText">
              You were beat by the {engine} engine who was able to stand on a level
              three tower first.
            </p>
          </div>
        )}
        {outcome === "cpuBlocked" && (
          <div className="endGameDisplay">
            <h2 className="endTitle">You won!</h2>
            <p className="endText">
              You beat the {engine} engine by the cpu not being able to move any
              builders on their turn.
            </p>
            {engine !== "minimax" && (
              <p className="endText">
                Now see if you can beat the minimax engine!
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  // FUNCTIONALITY

  // Placing initial player builders
  const placeBuilder = (id, value) => {
    const [row, column] = id.split("-");
    if (value === 0) {
      const newGrid = JSON.parse(JSON.stringify(grid));
      newGrid[row][column] = 10;
      setGrid(newGrid);
      status === "placeFirstBuilder"
        ? setStatus("placeSecondBuilder")
        : setStatus("cpuPlace");
    }
  };

  const selectBuilder = (id, value) => {
    if (10 <= value && value <= 13) {
      const [row, col] = id.split("-");
      setSelectedTile(id);
      // find movable tiles
      const result = validMoves(10, grid);
      const movesObject = Object.values(result).filter(
        (e) =>
          e.location[0] === parseInt(row) && e.location[1] === parseInt(col)
      );
      const stringAvailables = movesObject[0].validMoves.map(
        (e) => `${e[0]}-${e[1]}`
      );
      setAvailableMoveTiles(stringAvailables);
      setStatus("playerMoveBuilder");
    }
  };

  const moveBuilder = (id) => {
    const [row, col] = id.split("-");
    const [formerRow, formerCol] = selectedTile.split("-");
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col] += 10;
    newGrid[formerRow][formerCol] -= 10;
    setGrid(newGrid);
    setAvailableMoveTiles([]);
    setStatus("playerBuilderBuild");
    setSelectedTile("");
    if (newGrid[row][col] === 13) {
      setOutcome("playerWins");
    } else {
      const validBuildsArray = validBuilds(
        [parseInt(row), parseInt(col)],
        newGrid
      );
      setAvailableBuildTiles(validBuildsArray.map((e) => `${e[0]}-${e[1]}`));
    }
  };

  const builderBuild = (id) => {
    const [row, col] = id.split("-");
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col]++;
    setAvailableBuildTiles([]);
    setGrid(newGrid);
    setPause(true);
    setStatus("cpuDelay");
  };

  // Placing initial CPU builders
  if (status === "cpuPlace") {
    const newGrid = JSON.parse(JSON.stringify(grid));
    const cpuStartLocations = [];
    while (cpuStartLocations.length < 2) {
      const row = fakeNormal();
      const col = fakeNormal();

      if (newGrid[row][col] === 0) {
        cpuStartLocations.push([row, col]);
        newGrid[row][col] = 20;
      }
    }
    setGrid(newGrid);
    setStatus("playerSelectBuilder");
  }

  useEffect(() => {
    pause &&
      setTimeout(() => {
        if (status === "cpuDelay") {
          // check if cpu blocked in
          if (Object.keys(validMoves(20, grid)).length === 0) {
            setOutcome("cpuBlocked");
            setPause(false);
          } else {
            let result, newGrid;
            if (engine === "random") {
              [result, newGrid] = randomPlay(20, grid, validMoves(20, grid));
            }
            if (engine === "greedy") {
              [result, newGrid] = greedyHeight(20, grid, validMoves(20, grid));
            }
            if (engine === "minimax") {
              [result, newGrid] = minimax(20, grid, validMoves(20, grid));
            }
            // if cpu wins
            if (result === 1) {
              setOutcome("cpuWins");
            }
            // standard turn
            if (result === 0) {
              setGrid(newGrid);
              setStatus("playerSelectBuilder");
              setPause(false);
            }
          }
        }
      }, 1000);
  }, [pause, engine, grid, status]);

  // Tile click function
  const handleTileClick = (id, value) => {
    switch (status) {
      case "placeFirstBuilder": {
        placeBuilder(id, value);
        break;
      }
      case "placeSecondBuilder": {
        placeBuilder(id, value);
        break;
      }
      case "playerSelectBuilder": {
        //TODO: Check possible to move else lose
        selectBuilder(id, value);
        break;
      }
      case "playerMoveBuilder": {
        // check if player is blocked in
        if (Object.keys(validMoves(10, grid)).length === 0) {
          setOutcome("playerBlocked");
        } else {
          // if click other builder
          if (10 <= value && value <= 13) {
            selectBuilder(id, value);
          }
          // else if click available tile to move on
          else if (availableMoveTiles.includes(id)) {
            moveBuilder(id);
          }
        }
        break;
      }
      case "playerBuilderBuild": {
        availableBuildTiles.includes(id) && builderBuild(id);
        break;
      }
      default:
        return null;
    }
  };

  const restartGame = () => {
    setPlayerColour(null);
    setEnemyColour(null);
    setEngine(null);
    setStatus("gameOptions");
    setGrid([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    setOutcome("");
    setPause(false);
    setSelectedTile("");
    setAvailableMoveTiles([]);
    setAvailableBuildTiles([]);
  };

  return (
    <>
      <div className="totalGame">
        <div className="outline">
          <div className="totalBoard">
            <SideDisplay />
            {/*If no player, player colour picker shows*/}
            {!playerColour && <ColourPicker user="player" />}
            {/*If no enemy, enemy colour picker shows*/}
            {playerColour && !enemyColour && <ColourPicker user="enemy" />}
            {/*If no engine, enemy engine picker shows*/}
            {enemyColour && !engine && <EnginePicker />}
            {/* Else, show the grid */}
            {engine && <Grid />}
          </div>
        </div>
        <button onClick={() => restartGame()}>Restart Game</button>
      </div>

      <div className="explanationText">
        <h2 className="bold">How To Start</h2>
        <p>
          First, pick your colour and the CPUs colour. Then, pick an engine to
          play against. This is important as each engine follows a different
          algorithm with a different playstyle, some more effective than others.
        </p>
        <p>
          Now select two different tiles to place your workers on, then the CPU
          will pick two tiles for their workers.
        </p>
        <h2 className="bold">On Your Turn</h2>
        <h3 className="bold">Move a builder</h3>
        <p>
          Select one of your two builders by clicking the tile. Then click an
          available tile to move the builder to. This must be an unoccupied tile
          at most one level higher than your current standing. Your builder can
          drop down any number of levels on their move.
        </p>
        <h3 className="bold">Build up one tile</h3>
        <p>
          Your moved builder must now build on one adjacent unoccupied tile. You
          may build at any height. Building on a level three domes the tile,
          meaning it cannot now be stood on for the rest of the game
        </p>
        <h2 className="bold">How To Win</h2>
        <p>
          The first player to have a builder standing on a level three tile wins
          the game! You also win the game if your opponent has no valid moves on
          their turn, in the case they are blocked in. You can find some basic
          strategy tips{" "}
          <a
            href="https://jackburgess.me/santorini"
            target="_blank"
            rel="noreferrer"
            className="textLink"
          >
            here
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default PlaySantorini;
