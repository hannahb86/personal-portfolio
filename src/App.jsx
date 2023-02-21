import { useState } from 'react';
import SideNav from './components/SideNav';
import Background from './components/Background';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {

  return (
    <div>
      <SideNav />
      <Background />
      <Work />
      <Projects />
    </div>

  )
}

export default App;