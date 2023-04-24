import './List.sass';
import Search from '../search/Search';

const List = () => {
    return(
        <div className='list'>
            <table>
                <thead>
                    <Search/>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>      
    )
}

export default List;