import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Interest from './components/interest/Interest';
import Awards from './components/awards/Awards';
import Copyright from './components/Copyright';
import Images from './components/Images';

import './assets/css/style.css';
import './assets/css/nivo-lightbox/nivo-lightbox.css';
import './assets/css/nivo-lightbox/default.css';

import Imgme from './assets/images/me.jpg';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <div>
          <aside>
            <div className="scrollaside">
              <div className="avatar">
                <div className="inner">
                  <Images src={Imgme} alt="Me" />
                </div>
              </div>
              <nav>
                <ul className="menu">
                  <li className="active"><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#interest">Interest</a></li>
                  <li><a href="#awards">Awards</a></li>
                </ul>
              </nav>
            </div>
          </aside>
          <div className="content">
            <div className="scroll">
              <About/>
              <Experience/>
              <Education/>
              <Skills/>
              <Interest/>
              <Awards/>
              <Copyright/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
