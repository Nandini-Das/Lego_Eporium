import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/about':
        return 'Lego Eporium | About Us';
      case '/services':
        return 'Lego Eporium | Our Services';
      case '/contact':
        return 'Lego Eporium | Contact Us';
      default:
        return 'Lego Eporium';
    }
  };

  return (
    <div>
      <header>
        <h1>{getTitle()}</h1>
      </header>
      <Switch>
        {/* Define your routes here */}
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        {/* ... */}
      </Switch>
    </div>
  );
};

export default App;