import './List.sass';
import Search from '../search/Search';
import edit from '../../../icons/edit.svg';
import deleteIcon from '../../../icons/delete.svg';
import { Context } from '../../..';
import { useContext, useEffect, useState } from 'react';
import { ListItem } from '../../../models/ListItem';


const List = () => {

	const [items, setItems] = useState<Array<ListItem>>([]);
	const {store} = useContext(Context);

    useEffect(() => {
		async function fetchData() {
			const res = await store.generate_list();
			setItems(res);
		}
		fetchData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
                  {items.map((element) => (
                    <tr key={Number(element._id)}>
                      	<td>
							<button className="edit"><img src={edit} alt="Edit icon" /></button>
						</td>
                      	<td>{element.description}</td>
                    	<td
							style={{color: element.bool ? '#27AE60' : '#FC4C4F'}}
							data-tooltip={tooltipText}
							onClick={handleCopyAmount}
						>{element.value}</td>
                      	<td>{element.date}</td>
                      	<td>
							<button className="delete"><img src={deleteIcon} alt="Delete icon" /></button>
						</td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>      
    )
}

export default List;
