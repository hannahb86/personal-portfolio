import { useState } from 'react';
import SideNav from './components/SideNav';
import Background from './components/Background';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';

function App() {

  return (
    <div>
      <SideNav />
      <Background />
      <Projects />
      <About />
      <ContactForm />
    </div>

  )
}

export default App;