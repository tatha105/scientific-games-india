
import React, {useState} from 'react';
import Draggable from 'react-draggable';
import {scoreLable} from '../const';
import '../App.css';

const displayScore = (count: Number) : JSX.Element => {
  return  <div className="btn-score" > {scoreLable} : {count}</div>;
}

function ScoreComponent() {
const [count, setCount] = useState(0);
let [activeDrags , setactiveDrags] = useState(0);

const onStart = () => {
  setactiveDrags(++activeDrags);
};

const onStop = () => {
  setactiveDrags(--activeDrags);
};
const dragHandlers = {onStart: onStart, onStop: onStop};
return (
  <div className=''>
    <div className="boder">
    <div>
        <Draggable {...dragHandlers}>
        <div className="box" onMouseOver ={() => setCount(count + 1)}>
        </div>
        </Draggable>
      </div>
      {displayScore(count)}
    </div>
  </div>
);
}

export default ScoreComponent;