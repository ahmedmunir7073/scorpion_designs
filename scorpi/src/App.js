import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import About from './components/About'
import Contact from './components/Contact'

import Settings from './components/Settings'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/settings" component={Settings}/>
            
          </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;