import React from 'react';
import './styles/global.scss'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { NavBar } from './cmps/NavBar'
import { Footer } from './cmps/Footer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main >
        <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Services} path="/services" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
