import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';
import './App.css';

function App() {
  return (
    <AccountProvider>

    
    <Messenger/> 
    </AccountProvider>
  );
}

export default App;
