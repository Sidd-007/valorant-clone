import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
// import Agents from './components/Agents/Agents';
import Agents from './components/Agents/Agents'
import Weapons from './components/Weapons/Weapons';
import Maps from './components/Maps/Maps';

function App() {
    return (

        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}>
                        <Navbar />
                        <Home />
                    </Route>
                    <Route path="/agents" component={Agents}>
                        <Navbar />
                        <Agents />
                    </Route>
                    <Route path="/weapons" component={Weapons}>
                        <Navbar />
                        <Weapons />
                    </Route>
                    <Route path="/maps" component={Maps}>
                        <Navbar />
                        <Maps />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
}

export default App;
