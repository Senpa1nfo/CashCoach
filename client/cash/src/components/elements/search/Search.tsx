import './Search.sass';
import search from '../../../icons/search.svg';

const Search = () => {
    return(
        <div className='search-panel'>
            <div className="search-panel__search">
                <input type="search" name="search" placeholder="Пошук"/>
                <img src={search} alt="magnifier" className="search-panel__icon"/>
            </div>
            <div className="search-panel__sort">
                <button className="search-panel__filter">сума</button>
                <button className="search-panel__filter">дата</button>
            </div>
        </div>      
    )
}

export default Search;