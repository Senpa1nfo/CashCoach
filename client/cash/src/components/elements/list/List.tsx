import './List.sass';
import search from '../../../icons/search.svg';
import edit from '../../../icons/edit.svg';
import deleteIcon from '../../../icons/delete.svg';
import { Context } from '../../..';
import { useContext, useEffect, useState } from 'react';
import { ListItem } from '../../../models/ListItem';

interface UpdateListProps {
	searchQuery: string;
}
  
export const UpdateList = ({ searchQuery }: UpdateListProps) => {

	document.querySelectorAll('.adding__btn')?.forEach((element) => {
		element.addEventListener('click', () => {
			changeBool();
		})
	})
	
	// Генерация и обновление списка
	const [items, setItems] = useState<Array<ListItem>>([]);
	const {store} = useContext(Context);

	const [bool, setBool] = useState(false);
	const changeBool = () => {	
		console.log(1);
		
		setBool(bool => !bool);
	}

	useEffect(() => {
		async function fetchData() {
			const res = await store.generate_list();
			setItems(res);
		}
		fetchData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bool]);

	const filteredItems = items.filter((item) =>
		item.description.toLowerCase().includes(searchQuery.toLowerCase()) 
		|| item.value.includes(searchQuery)
		|| item.date.includes(searchQuery)
	);

	// Копирование текста по нажатию
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
	console.log(filteredItems);
	
	return (
		<tbody>
			{filteredItems.map((element) => (
				<tr key={Number(element.item_id)}>
					<td>
						<button onClick={() => changeBool()} className="edit"><img src={edit} alt="" /></button>
					</td>
					<td>{element.description}</td>
					<td
						style={{color: element.bool ? '#27AE60' : '#FC4C4F'}}
						data-tooltip={tooltipText}
						onClick={handleCopyAmount}
					>{element.value}</td>
					<td>{element.date}</td>
					<td>
						<button onClick={() => {
							store.delete(Number(element.item_id));
							setTimeout(changeBool, 100);
						}} 
							className="delete"><img src={deleteIcon} alt="Delete icon" />
						</button>
					</td>
				</tr>
			))}
        </tbody>
	)
}

const List = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

    return(
        <div className='list'>
			<div className='search-panel'>
            <div className="search-panel__search">
                <input type='text' value={searchQuery} onChange={handleSearchChange} placeholder='Search...' />
                <img src={search} alt="magnifier" className="search-panel__search__icon"/>
            </div>
            <div className="search-panel__sort">
                <button className="search-panel__filter">сума</button>
                <button className="search-panel__filter">дата</button>
            </div>
        </div>  
      		<div className='table'>
				<table className='list__table'>
					<UpdateList searchQuery={searchQuery} />
				</table>
			</div>
        </div>      
    )
}

export default List;
