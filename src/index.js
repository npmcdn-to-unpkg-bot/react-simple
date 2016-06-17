import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';

const App = React.createClass({
  render() {
    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
});

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
), document.body);