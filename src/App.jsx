import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import Cards from './views/Cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/cards" />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/:_id" component={CardDetail}>
            <CardDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
