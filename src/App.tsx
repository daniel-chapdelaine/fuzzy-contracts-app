import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Thesis from './routes/Thesis';
import Demo from './routes/Demo';
import Conclusion from './routes/Conclusion';
import { RouteOptions } from './types';
import ThesisTwo from './routes/ThesisTwo';
import ThesisThree from './routes/ThesisThree';
import Title from './routes/Title';

const ROUTES: RouteOptions[] = [
  {
    route: '/',
    back: '',
    next: '/thesis',
    monster: 'mon-0',
  },
  {
    route: '/thesis',
    back: '/',
    next: '/thesis-continued',
    monster: 'mon-1',
  },
  {
    route: '/thesis-continued',
    back: '/thesis',
    next: '/thesis-continued-again',
    monster: 'mon-2',
  },
  {
    route: '/thesis-continued-again',
    back: '/thesis-continued',
    next: '/demo',
    monster: 'mon-3',
  },
  {
    route: '/demo',
    back: '/thesis-continued',
    next: '/conclusion',
    monster: 'mon-4',
  },
  {
    route: '/conclusion',
    back: '/demo',
    next: '',
    monster: 'mon-5',
  },
]

function RoutingFeature() {
  const pathname = useLocation().pathname; 
  const { next, back, monster } = ROUTES.find(route => route.route === pathname) || ROUTES[0];
  return (
    <div style={{ height: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end' }}>
      { next
        ? <Link className='link' to={next} style={{ marginLeft: '2rem' }} >Next →</Link> 
        : <div className='link' style={{ marginLeft: '2rem' }}>Thank you!</div> 
      }
        <img
          src={require(`./images/${monster}.png`)}
          alt="monster"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'cover',
          }}
        />
      { back
        ? <Link className='link' to={back} style={{ marginRight: '2rem' }} >← Back</Link> 
        : <div className='link' style={{ marginRight: '2rem' }}>Hello</div> 
      }
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <div style={{ flexGrow: 1, padding: '2.5rem 6rem', maxWidth: '950px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <h1 >Fuzzy Contracts</h1>
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Title />} />
                <Route path="/thesis" element={<Thesis />} />
                <Route path="/thesis-continued" element={<ThesisTwo />} />
                <Route path="/thesis-continued-again" element={<ThesisThree />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/conclusion" element={<Conclusion />} />
              </Routes>
            </div>
        </div>
        <RoutingFeature/>
      </div>
    </Router>
  );
}

export default App;