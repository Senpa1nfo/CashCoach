import './List.sass';
import Search from '../search/Search';
import { useState } from 'react';

import edit from '../../../icons/edit.svg';
import deleteIcon from '../../../icons/delete.svg';

interface Item {
	id: number;
	description: string;
	amount: string;
	flag: boolean;
	date: string;
}

// date format 23-04-2023 15:17

const items: Item[] = [
	{ id: 1, description: 'Item 1', amount: '10.00', flag: true, date: '23-04-2023 15:17' },
	{ id: 2, description: 'Item 2', amount: '20.00', flag: false, date: '2023-04-23 15:10' },
	{ id: 3, description: 'Item 3', amount: '30.00', flag: true, date: '2023-04-22 9:33' },
	{ id: 4, description: 'Item 4', amount: '40.00', flag: false, date: '2023-04-21 10:05' },
	{ id: 5, description: 'Item 5', amount: '50.00', flag: true, date: '2023-04-20 19:01' },
	{ id: 1, description: 'Item 1', amount: '10.00', flag: true, date: '23-04-2023 15:17' },
	{ id: 2, description: 'Item 2', amount: '20.00', flag: false, date: '2023-04-23 15:10' },
	{ id: 3, description: 'Item 3', amount: '30.00', flag: true, date: '2023-04-22 9:33' },
	{ id: 4, description: 'Item 4', amount: '40.00', flag: false, date: '2023-04-21 10:05' },
	{ id: 5, description: 'Item 5', amount: '50.00', flag: true, date: '2023-04-20 19:01' },
	{ id: 1, description: 'Item 1', amount: '10.00', flag: true, date: '23-04-2023 15:17' },
	{ id: 2, description: 'Item 2', amount: '20.00', flag: false, date: '2023-04-23 15:10' },
	{ id: 3, description: 'Item 3', amount: '30.00', flag: true, date: '2023-04-22 9:33' },
	{ id: 4, description: 'Item 4', amount: '40.00', flag: false, date: '2023-04-21 10:05' },
	{ id: 5, description: 'Item 5', amount: '50.00', flag: true, date: '2023-04-20 19:01' }
];

const List = () => {
  const [tooltipText, setTooltipText] = useState('Клацніть, щоб скопіювати');

  const handleCopyAmount = (event: React.MouseEvent<HTMLTableCellElement>) => {
	const cell = event.target as HTMLElement;
	const amount = cell.textContent;
  
	if (amount) {
	  navigator.clipboard.writeText(amount);
	  setTooltipText('Текст успішно скопійовано');
	  setTimeout(() => {
		setTooltipText('Клацніть, щоб скопіювати');
	  }, 2000);
	}
  };
  

  return(
    <div className='list'>
		<Search/>
		<table>
			<thead>
				<tr>
					<th>Ред.</th>
					<th>Опис</th>
					<th>Сума</th>
					<th>Дата</th>
					<th>Вид.</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<tr key={item.id}>
						<td><button className="edit"><img src={edit} alt="Edit icon" /></button></td>
						<td>{item.description}</td>
						<td
						style={{color: item.flag ? '#27AE60' : '#FC4C4F'}}
						data-tooltip={tooltipText}
						onClick={handleCopyAmount}
						>{item.amount}</td>
						<td>{item.date}</td>
						<td><button className="delete"><img src={deleteIcon} alt="Delete icon"/></button></td>
					</tr>
				))}
			</tbody>
		</table>
    </div>      
  );
};


export default List;