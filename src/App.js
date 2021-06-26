import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './layouts/header';
import ContextProvider from './contexts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Routes />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
