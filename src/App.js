import { Toaster } from 'react-hot-toast';
import './App.css';
import TestGenerator from './screens/TestGenerator';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" />
      <TestGenerator />
    </div>
  );
}

export default App;
