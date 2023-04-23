import './WorkingArea.sass';
import List from '../list/List';
import Statistics from '../statistics/Statistics';

const WorkingArea = () => {
    return (
        <div className="working-area">
            <List/>
            <Statistics/>
        </div>
    )
    
}

export default WorkingArea;