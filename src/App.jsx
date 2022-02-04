import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Card from './views/Card';
import Cards from './views/Cards';

function App() {
  return (
    <div className="App" style={{ 'text-align': 'center' }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/cards" />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/:_id">
            <Card />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
