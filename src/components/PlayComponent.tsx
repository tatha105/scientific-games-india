import '../App.css';
import {playbuttnName} from '../const';

function PlayComponent({history}) {
    return (
        <div className="boder">
            <div className="box1">
            </div>
            <div className="play" onClick={() => history.push("score")}> {playbuttnName}
            </div>
        </div>

    );
};
export default PlayComponent;