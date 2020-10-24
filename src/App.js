import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/themes/Themes';
import { GlobalStyles } from './components/themes/Global';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.less';



const App = () => {
  // const [theme, setTheme] = useState('light');
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }
  return (
    <div>
      {/* <Counter /> */}
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} component={HomePage} path="/" exact />
          <PublicRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
