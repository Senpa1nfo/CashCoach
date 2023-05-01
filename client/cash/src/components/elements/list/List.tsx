import './List.sass';
import search from '../../../icons/search.svg';
import edit from '../../../icons/edit.svg';
import deleteIcon from '../../../icons/delete.svg';
import { Context } from '../../..';
import { useContext, useEffect, useState } from 'react';
import { ListItem } from '../../../models/ListItem';

interface UpdateListProps {
	searchQuery: string;
	sortColumn: string;
	sortDirection: string;
  }
  
const UpdateList = ({ searchQuery, sortColumn, sortDirection }: UpdateListProps) => {
	const [items, setItems] = useState<Array<ListItem>>([]);
	const { store } = useContext(Context);
	const [bool, setBool] = useState(false);
	const changeBool = () => {
	  setBool(bool => !bool);
	};

	document.querySelectorAll('.adding__btn')?.forEach((element) => {
		element.addEventListener('click', () => {
			changeBool();
		})
	})
  
	useEffect(() => {
	  async function fetchData() {
		const res = await store.generate_list();
		setItems(res);
	  }
	  fetchData();
	}, [bool, store]);
  
	const filteredItems = items.filter((item) =>
	  item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
	  item.value.includes(searchQuery) ||
	  item.date.includes(searchQuery)
	);
  
const sortedItems = sortColumn && sortDirection
  ? filteredItems.sort((a:any, b:any) => {
      let aValue = a.bool ? a.value : -a.value;
      let bValue = b.bool ? b.value : -b.value;

      if (sortColumn === "amount") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      } else if (sortColumn === "date") {
        return sortDirection === "asc"
          ? new Date(a.timeAdded).getTime() - new Date(b.timeAdded).getTime()
          : new Date(b.timeAdded).getTime() - new Date(a.timeAdded).getTime();
      } else {
        return 0;
      }
    })
  : filteredItems;

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
	}

	return (
		<tbody>
		  {sortedItems.map((element) => (
			<tr key={Number(element.item_id)}>
				<td><button onClick={() => changeBool()} className="edit"><img src={edit} alt="" /></button></td>
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
	const [sortColumn, setSortColumn] = useState('');
	const [sortDirection, setSortDirection] = useState('');
  
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	  setSearchQuery(event.target.value);
	};
  
	const handleSortByAmount = () => {
	  if (sortColumn === 'amount' && sortDirection === 'asc') {
		setSortDirection('desc');
	  } else {
		setSortColumn('amount');
		setSortDirection('asc');
	  }
	};
  
	const handleSortByDate = () => {
	  if (sortColumn === 'date' && sortDirection === 'asc') {
		setSortDirection('desc');
	  } else {
		setSortColumn('date');
		setSortDirection('asc');
	  }
	};
  
	return (
		<div className='list'>
			<div className='search-panel'>
				<div className="search-panel__search">
					<input type='text' value={searchQuery} onChange={handleSearchChange} placeholder='Пошук...' />
					<img src={search} alt="magnifier" className="search-panel__search__icon"/>
				</div>
				<div className="search-panel__sort">
					<button onClick={handleSortByAmount} 
						className={`search-panel__filter ${sortColumn === 'amount' && `search-panel__filter--active ${sortDirection === 'asc' ? 'search-panel__filter--asc' : 'search-panel__filter--desc'}`}`}>
							сума<span id="sortIcon">{sortColumn === "amount" ? (sortDirection === "asc" ? "↑" : "↓") : ""}</span></button>
					<button onClick={handleSortByDate}
						className={`search-panel__filter ${sortColumn === 'date' && `search-panel__filter--active ${sortDirection === 'asc' ? 'search-panel__filter--asc' : 'search-panel__filter--desc'}`}`}>
							дата<span id="sortIcon">{sortColumn === "date" ? (sortDirection === "asc" ? "↑" : "↓") : ""}</span></button>
				</div>
			</div>  
			<div className='table'>
				<table className='list__table'>
					<UpdateList searchQuery={searchQuery} sortColumn={sortColumn} sortDirection={sortDirection} />
				</table>
			</div>
		</div>
)}
  

export default List;
