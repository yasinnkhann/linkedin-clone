import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import { getUserAuth } from '../actions/index.js';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
