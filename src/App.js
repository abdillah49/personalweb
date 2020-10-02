import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

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
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <About/>
    },
    {
      path: "/experience",
      main: () => <Experience/>
    },
    {
      path: "/education",
      main: () => <Education/>
    },
    {
      path: "/skills",
      main: () => <Skills/>
    },
    {
      path: "/interest",
      main: () => <Interest/>
    },
    {
      path: "/awards",
      main: () => <Awards/>
    }
  ]
  return (
    <Router>
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
                    <li className="active"><Link to="/">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/interest">Interest</Link></li>
                    <li><Link to="/awards">Awards</Link></li>
                  </ul>
                </nav>
              </div>
            </aside>
            <div className="content">
              <div className="scroll">
                <Switch>
                  {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
