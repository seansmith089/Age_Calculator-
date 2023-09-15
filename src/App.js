import './App.css';
import CardBackground from './components/Card_Background';
import AgeInput from './components/AgeInput';
import AgeDisplay from './components/AgeDisplay';
import Button from './components/Button';

import { AgeContextProvider } from './contexts/AgeContext';

function App() {

  return (
    <AgeContextProvider>
      <div className="app_container">
        <CardBackground>
          <AgeInput></AgeInput>
          <Button></Button>
          <AgeDisplay></AgeDisplay>
        </CardBackground>
      </div>
    </AgeContextProvider>
  );
}

export default App;
