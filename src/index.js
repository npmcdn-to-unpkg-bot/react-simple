import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducer(state, action) {
  switch (action.type) {
    case "onClick":
      return {msg: state.msg+1};
    default:
      return state;
  }
}

const store = createStore(reducer, {msg: 0}, applyMiddleware(thunk));

const App = React.createClass({
  render() {
    console.info("App.render: before");
    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
});

const Home = React.createClass({
  render() {
    return (<div onClick={this.props.delayedClick}>Clicked {this.props.msg} times.</div>);
  }
});

const HomeContainer = connect(
    state => {return {msg: state.msg}},
    dispatch => {return {
      onClick: () => dispatch({type: "onClick"}),
      delayedClick: () =>
          dispatch((dispatch, getState) =>
              setTimeout(() => dispatch({type: "onClick"}), 1000))
    }}
)(Home);

ReactDom.render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/react-simple" component={App}>
          <IndexRoute component={HomeContainer}/>
        </Route>
      </Router>
    </Provider>
), document.getElementById("container"));
console.info("index: after render");