import SideNav from './components/SideNav';
import Background from './components/Background';
import Projects from './components/Projects';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';


function App() {

  return (
    <div>
      <SideNav />
      <Background />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </div>

  )
}

export default App;