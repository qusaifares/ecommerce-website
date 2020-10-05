import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { Switch, Route, useHistory } from 'react-router-dom';

const App: React.FC = () => {
  const history = useHistory();
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    console.log(history.location.pathname);
    setIsDark(history.location.pathname === '/cart');
    return () => {
      setIsDark(false);
    };
  }, [window.location.pathname]);
  return (
    <div className="app">
      <Header isDark={history.location.pathname === '/cart'} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
