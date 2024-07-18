import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import {AppContextProvider} from './context';

import './global.css';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  );
}; 

export { App };
