import './App.css';
import DisplayTeam from './Components/DisplayTeam/DisplayTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <div >
    
     <Router>
       <Switch>
         <Route exact path="/">
           <DisplayTeam></DisplayTeam>
         </Route>
         <Route path="/team/:idTeam">
           <TeamDetails></TeamDetails>
         </Route>
       </Switch>
     </Router>


    </div>
  );
}

export default App;
