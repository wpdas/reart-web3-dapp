import { BrowserRouter as Router } from 'react-router-dom';
import { TransactionContractProvider } from '@app/context/TransactionContractContext';
import Routes from '@app/routes/Routes';
import AppThemeProvider from '@app/theme';

const App = () => (
  <AppThemeProvider>
    <TransactionContractProvider>
      <Router>
        <Routes />
      </Router>
    </TransactionContractProvider>
  </AppThemeProvider>
);

export default App;
