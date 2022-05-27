import { BrowserRouter as Router } from 'react-router-dom';
import { TransactionContractProvider } from '@app/context/TransactionContractContext';
import Routes from '@app/routes/Routes';
import AppThemeProvider from '@app/theme';
import '@app/utils/firebase';
import { Navbar } from './components';

const App = () => (
  <AppThemeProvider>
    <TransactionContractProvider>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </TransactionContractProvider>
  </AppThemeProvider>
);

export default App;
