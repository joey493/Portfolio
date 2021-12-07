// react components
// import { Component } from 'react';
// import {Route} from 'react-router-dom';

// custom components
import Header from './components/header.component';
import LandingSec from './sections/landing.section';
import About from './sections/about.section'
import Projects from './sections/Projects.section';
import Contact from './sections/contact.section';
import Footer from './components/footer.component';

// style sheet
import './main-style.scss';

// check downloaded npm packages

/*
  - nav bar
    - active section
    -scroll to top
    -add router
      - use NavLink
*/

/*
  - landing section
    - type effect
    - text fill hover effect on myName // maybe
    - contact or Projects btn // maybe
*/
/*
  - About section
    - add education
    - add vector
    - Add carosual to skills // maybe
    - contact or Projects btn // maybe
*/

/*
  - myWork section
    - overlay
    - edit grid
*/

/*
  - Contact section
    - add Links to social media
    - edit grid
*/

/*
  - next profile 
    - add Testimonial
*/


const App = () => {
  return (
    <div>
      <Header />
      <LandingSec />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
