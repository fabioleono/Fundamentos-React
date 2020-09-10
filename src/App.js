import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Banner from './banner'
import GridCard from './gridCard'
import Form from './form'
import Cards from './cards'
import Menu from './menuNav'



const App = () => (
  <Router>
    <Menu />  
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/Cards/:id" component={Cards} />
      <Route path="/Cards" component={GridCard} />
      <Route path="/Login" component={() => <Form formName="Login" />} />
      {/* Sin el parametro path Route define las rutas no conocidad, se podria crear un componente para este error. Es necesario utiliozar el componente Switch */}
      <Route
        component={() => (
          <>
            <div>ERROR 404</div>
            <p>Ruta no definida</p>
          </>
        )}
      />
    </Switch>
  </Router>
);

export default App;
