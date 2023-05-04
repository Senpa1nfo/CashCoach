import './WorkingArea.sass';
import List from '../list/List';
import Statistics from '../statistics/Statistics';
import Calculator from '../calculator/Calculator';

const WorkingArea = ({getBool}: any) => {
    return (
        <div className="working-area">
          <List changeBool={getBool}/>
          <Statistics />
          <Calculator />
        </div>
    );
};
  
export default WorkingArea;
  