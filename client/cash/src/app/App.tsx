import './App.sass';
import Header from "../components/elements/header/Header";
import Adding from "../components/elements/adding/Adding";
import Statistic from "../components/elements/statistic/Statistic";
import Search from "../components/elements/search/Search";
import List from "../components/elements/list/List";


const App = () => {
    return(
        <div>
            <Header></Header>
            <main>
                <Adding></Adding>
                <div className="wrapper">
                    <Statistic></Statistic>
                    <Search></Search>
                    <List></List>
                </div>
            </main>
        </div>      
    )
}

export default App;