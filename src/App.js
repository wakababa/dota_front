import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useSWR from "swr";

import {AbilityUpgradesPage} from './page'

function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/ability-upgrades">
          <AbilityUpgradesPage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
