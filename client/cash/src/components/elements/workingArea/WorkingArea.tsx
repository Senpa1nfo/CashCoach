import './WorkingArea.sass';
import List from '../list/List';
import Statistics from '../statistics/Statistics';
import Calculator from '../calculator/Calculator';

const WorkingArea = () => {
    return (
        <div className="working-area">
          <List />
          <Statistics />
          <Calculator />
        </div>
    );
};
  
export default WorkingArea;
  