import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import SecurePage from './SecurePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/secure" component={SecurePage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
