import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import createHistory from '../history';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={createHistory}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={StreamList} />
              <Route exact path="/streams/:id" component={StreamShow} />
              <Route exact path="/streams/edit/:id" component={StreamEdit} />
              <Route
                exact
                path="/streams/delete/:id"
                component={StreamDelete}
              />
              <Route exact path="/streams/create" component={StreamCreate} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
