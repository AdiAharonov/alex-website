import React from 'react';
import './styles/global.scss'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './cmps/NavBar'
import { Footer } from './cmps/Footer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main >
        <Switch>
        <Route exact component={Home} path="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
