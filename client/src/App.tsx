import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PersistorProvider from '@app/providers/PersistorProvider';
import Routes from '@app/routes/Routes';
import { store } from '@app/store';
import AppThemeProvider from '@app/theme';

const App = () => (
  <AppThemeProvider>
    <Provider store={store}>
      <PersistorProvider>
        <Router>
          <Routes />
        </Router>
      </PersistorProvider>
    </Provider>
  </AppThemeProvider>
);

export default App;
