import {Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Boards from './components/Boards/Boards';
// import BoardDetail from './components/BoardDetail/BoardDetail';
// import AddBoard from './components/AddBoard/AddBoard';


function App() {
  return (
    <div>
      <Nav/>
      <Route path="/" exact render={() => <Home/>}/>
      <Route path="/boards" render={() => <Boards/>}/>
    </div>
  );
}

export default App;
