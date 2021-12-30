// custom components
import Header from './components/header.component';
import LandingSec from './sections/landing.section';
import About from './sections/about.section'
import Projects from './sections/Projects.section';
import Contact from './sections/contact.section';
import Footer from './components/footer.component';

// style sheet
import './main-style.scss';

const App = () => {
  return (
    <>
      <Header />
      <LandingSec />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
