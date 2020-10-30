import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navb from './Components/Navb';
import Home from './Components/Home'
import 'tachyons'
import {UserList} from './Components/UserList'
import User from './Components/User';
import Comment from './Components/Comment';

function App() {
  return (
    <div className="App">
      <Navb />
    
    <Switch>
<Route exact path='/' component ={Home} />
<Route exact path='/user' component ={UserList} />
<Route exact path='/user/:id' component ={User} />
<Route exact path='/user/:id/comment/:id' component ={Comment} />

    </Switch>
    </div>
  );
}

export default App;
