import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import Route404 from './404';
import RouteHome from './home';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={RouteHome} />
        <Route path='*' component={Route404} />
      </Router>
    );
  }
}

export default AppRouter;
