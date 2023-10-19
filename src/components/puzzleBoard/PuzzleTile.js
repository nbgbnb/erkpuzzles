import React from 'react';
import './Puzzle.css';
/*
    In the current state, this is a very basic and extensible implementation of a tile
    that can be used in many different puzzle games.
    The color can be set to any valid CSS color value, or it will default to a light green.
    The parent component should override the clickhandler to report x and y coordinates, 
    and assign props accordingly
*/

const PuzzleTile = (props) => {
    const { tile, index, handleClick, handleTouch } = props;
    const { id, color} = tile;
    
    return (
        <button
        style={{backgroundColor: color ?? '#aaffaa'}}
        className={`tile`} 
        // onDrag={(e) => {e.preventDefault()}}
        onMouseDown={(e) => {handleClick(e)}}
        onTouchStart={(e) => {handleTouch(e)}}
        onMouseOver={(e) => {if (e.buttons != 0) handleClick(e)}}
        // onClick={(e) => handleClick(e)}
        onContextMenu={(e) => { 
            e.preventDefault();
            handleClick(e)
        }} 
        >
        </button>
    );

}
export default PuzzleTile;