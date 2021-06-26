import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import ContextProvider from './contexts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
