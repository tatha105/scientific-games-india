
import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable';
import {scoreLable} from '../const';
import '../App.css';

const displayScore = (count: Number) : JSX.Element => {
  return  <div className="btn-score" > {scoreLable} : {count}</div>;
}

function ScoreComponent() {
const [count, setCount] = useState(0);
let [activeDrags , setactiveDrags] = useState(0);
const [controlledPosition, setcontrolledPosition] = useState({
  x: 0, y: 0
}); 

useEffect(()=>{
  let startTimer;
  if(controlledPosition.x < 580){
     startTimer = setTimeout(()=>{
      setcontrolledPosition({x: controlledPosition.x + 10, y: controlledPosition.y+ 5});
      console.log(controlledPosition.x, controlledPosition.y);
    }, 100);
  } else{
    setCount(count + 1);
    clearTimeout(startTimer);
  }
},[controlledPosition]);

const onStart = () => {
  setactiveDrags(++activeDrags);
};

const onStop = (e) => {
  setcontrolledPosition({x: e.x , y: e.y});
  setactiveDrags(--activeDrags);
};
const dragHandlers = {onStart: onStart, onStop: onStop};
return (
  <div className=''>
    <div className="boder">
    <div>
        <Draggable {...dragHandlers} position={controlledPosition} >
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