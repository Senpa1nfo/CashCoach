import './WorkingArea.sass';
import List from '../list/List';
import Statistics from '../statistics/Statistics';
import Calculator from '../calculator/Calculator';
import { Component } from 'react';

interface WorkingAreaProps {
	getBool: () => void;
}

class WorkingArea extends Component<WorkingAreaProps> {
	render() {
		const { getBool } = this.props;
		return (
			<div className="working-area">
				<List changeBool={getBool} />
				<Statistics />
				<Calculator />
			</div>
		)
	}
}

export default WorkingArea;