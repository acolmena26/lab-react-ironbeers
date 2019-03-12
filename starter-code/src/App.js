import React, { Component } from 'react';
import './App.css';
import Header from './models/Header.js';
import Home from './models/Home.js';
import List from './models/List.js';
import Random from './models/Random.js';
import Form from './models/Form.js';
import Individual from './models/Individual.js';
import { Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        <section className='container'>
          <div className='column'>
          <Switch>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/beers' component={List}></Route>
              <Route exact path='/random' component={Random}></Route>
              <Route exact path='/new' component={Form}></Route>
              <Route exact path='/single/:id' component={Individual}></Route>
              <Redirect to='/home' />
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
