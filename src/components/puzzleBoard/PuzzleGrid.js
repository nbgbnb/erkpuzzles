import React, { useState } from "react";
import PuzzleTile from "./PuzzleTile";

const puzzleBG = '#100030';
const emptyTileColor = '#201040';
const txtColor = '#ffaaff';

function getPastelColor() {
    let hue = Math.floor(Math.random() * 360);
    let rgb = ['aa', 'aa', 'aa'];
    rgb[Math.floor(Math.random() * 3)] = 'ff';
    rgb[Math.floor(Math.random() * 3)] = 'ff';
    let pastel = '#' + rgb.join('');
    // console.log(`pastel: ${pastel}`);
    return pastel;
}

function getGrid(x, y) {
    let grid = [];
    for (let rowNum = 0; rowNum < y; rowNum++) {
        let row = [];
        for (let colNum = 0; colNum < x; colNum++) {
            row.push({ id: `${rowNum}-${colNum}`, color: emptyTileColor, flag: false });
        }
        grid.push(row);
    }
    return grid;
}

const PuzzleGrid = (props) => {

    // undefined grids will default to 6x6
    const [tiles, setTiles] = useState(getGrid(props.x ?? 6, props.y ?? 6));

    const handleTileClick = (e, row, col) => {
        // console.log(`tile clicked: ${row}, ${col}`);
        let tile = tiles[row][col];
        switch (e.buttons) {
            case 1:
                console.log('left click!');
                tile.color = getPastelColor();
                tile.flag=true;
                break;
            case 2:
                console.log('right click!');
                tile.color = emptyTileColor;
                tile.flag=false;
                break;
            default:
                return
        }

        updateTile(row, col, tile);
    };

    const handleTileTouch = (e, row, col) => {
        let tile = tiles[row][col];
        if (tile.flag === true){
            tile.color = emptyTileColor;
            tile.flag=false;
        } else {
            tile.color = getPastelColor();
            tile.flag=true;
        }
        updateTile(row, col, tile);
    }

    const setTileColor = (row, col, color) => {
        updateTile(row, col, { color: color });
    }

    const setTile = (row, col, tile) => {
        setTiles((prevTiles) => {
            const newTiles = [...prevTiles];
            newTiles[row][col] = tile;
            return newTiles;
        });
    }

    const updateTile = (row, col, properties) => {
        setTiles((prevTiles) => {
            const newTiles = [...prevTiles];
            newTiles[row][col] = { ...newTiles[row][col], ...properties };
            return newTiles;
        });
    }

    return (
            <div className="puzzleGrid m-4 p-3 rounded"
            style = {{backgroundColor: puzzleBG}}>

            <h1 className="text-center text-light">Puzzle Grid</h1>
            <div className="borderThick">
            {tiles.map((row, rowIndex) => (
                    <div key={rowIndex}
                        style={{ display: "flex", flexDirection: "row" }}>
                        {row.map((tile, colIndex) => (
                            <PuzzleTile
                                key={`${rowIndex}-${colIndex}`}
                                tile={tile}
                                handleClick={(e) => handleTileClick(e, rowIndex, colIndex)} 
                                handleTouch={(e) => handleTileTouch(e, rowIndex, colIndex)}/>
                        ))}
                    </div>
                ))}

            </div>
            <input type="button"
                className="m-2"
                value="randomize"
                onClick={() => setTiles(tiles.map((row, rowIndex) => (
                    row.map((tile, colIndex) => (
                        { id: `${rowIndex}-${colIndex}`, color: getPastelColor() }
                    ))
                )))} />
            <input type="button"
                className="m-2"
                value="Reset"
                onClick={() => setTiles(getGrid(props.x ?? 6, props.y ?? 6))} />
            </div>


    );
};

export default PuzzleGrid;
