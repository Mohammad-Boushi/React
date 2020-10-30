import React, { Component } from 'react'
import {BrowserRouter , Switch  , Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import About from './About/About'
import Contact from './Contact/Contact'
import Page404 from './Page404/Page404'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/Show/:id' component={ShowOne} />   */}
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/*' component={Page404} />
        </Switch>
      </BrowserRouter>
    )
  }
}