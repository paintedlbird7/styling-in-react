// src/App.jsx

import './App.css';
import Button1 from './components/example-1-normal-css/Button';
import Button2 from './components/example-2-inline-css/Button';
import Button3 from './components/example-3-styled-components/Button';

// Later on, we'll import button components here

const App = () => {
  return (
    <div className="App">
      {
        // Add all example components:
        <div className="App">
        <Button1 buttonText="Example 1" />
        <Button2 buttonText="Example 2" />
        <Button3 buttonText="Example 3" />


        </div>
      }
    </div>
  );
};

export default App;
