import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Breakfast from './components/Home/Breakfast/Breakfast';
import Dinner from './components/Home/Dinner/Dinner';
import Home from './components/Home/Home/Home';
import Lunch from './components/Home/Lunch/Lunch';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <route path="/booking/:mealsId">
            <Booking></Booking>
          </route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          {/* <Route path="/choose">
            <Choose></Choose>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
