import './List.sass';
import deleteSvg from '../../../icons/delete.svg';

const List = () => {
    return(
        <div className='list'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Опис</th>
                        <th>Сума</th>
                        <th>Дата</th>
                        <th>
                            <button className="deleteBtn">
                                <img src={deleteSvg} alt="delete" className="delete"/>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>      
    )
}

export default List;