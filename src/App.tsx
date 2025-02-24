import React from 'react';
import Home from './pages/Home/Home.tsx';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;