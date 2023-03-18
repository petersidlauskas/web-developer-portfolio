
import './App.css';
import { ScrollControls, Scroll, Environment} from '@react-three/drei'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Rain} from './models/Rain'
import {EffectComposer, Bloom, DepthOfField} from '@react-three/postprocessing'
import html from './html.png'
import css from './css.png'
import javascript from './javascript.png'
import logo from './react.png'
import node from './node.png'
import python from './python.png'



function App() {
  return (
    <>
    <color attach='background' args={['#87CEEB']} />
    
    <Environment preset='warehouse' />
    
    <EffectComposer>
      <Bloom intensity={1} luminanceThreshold={0.2} luminanceSmoothing={0.9} height={1000} />
      <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
    </EffectComposer>

    <ScrollControls pages={5} damping={0.25}>
    <Scroll>

    
    <Rain scale={0.009} position={[-2,-7,0]} />
    <Rain scale={0.007} position={[3,-3.2,2]} />
    <Rain scale={0.010} position={[-3,-4.5,0]} />
    <Rain scale={0.010} position={[4,-7.5,0]} />
    
    <Rain scale={0.009} position={[-2,-10,0]} />
    <Rain scale={0.007} position={[3,-10,2]} />
    <Rain scale={0.010} position={[-3,-17,0]} />
    <Rain scale={0.010} position={[4,-16.5,0]} />
    
    <Rain scale={0.009} position={[-4,-20,0]} />
    <Rain scale={0.007} position={[3,-22,2]} />
    <Rain scale={0.010} position={[-1,-23,0]} />
    <Rain scale={0.010} position={[4,-20,1]} />

    <Rain scale={0.009} position={[-1,-30,0]} />
    <Rain scale={0.007} position={[3,-32,1]} />
    <Rain scale={0.010} position={[-2,-35,1]} />
  
    </Scroll>

    <Scroll html style={{width: '100%'}}>
      
    <Container style={{position: 'relative'}}>
      <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px'}}>
        <Col xs={6}>
          <div>
            <h1 style={{marginBottom: '0px'}}>Peter Sidlauskas</h1><h2>Web Developer</h2>
          </div>
        </Col>
      </Row>
      <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px', top: '100vh'}}>
        <Col xs={6}>
          <div>
            <h1 style={{marginBottom: '0px'}}>About Me</h1><h2>I am an Entrepreneur/Video Editor turned Web Developer located in New York City</h2>
          </div>
        </Col>
      </Row>
      <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px', top: '200vh'}}>
        <Col xs={6}>
          <div>
            <h1 style={{marginBottom: '0px'}}>Skills</h1> <div style={{display: 'flex'}}><img src={html} /> <img src={css} /> <img src={javascript} /> <img src={logo} /> <img src={node} /> <img src={python} /></div>
          </div>
        </Col>
      </Row>
      <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px', top: '300vh'}}>
        <Col xs={6}>
          <div>
            <h1 style={{marginBottom: '0px'}}>Projects</h1><h2></h2><a href="https://github.com/petersidlauskas" target="_blank"><Button variant="success" size="lg">GitHub</Button></a>  <a href="https://bronze56k.com" target="_blank"><Button variant="success" size="lg">Bronze56k</Button></a>  <a href="https://jpins.com" target="_blank"><Button variant="success" size="lg">JPins</Button></a>
          </div>
        </Col>
      </Row>
      <Row className='text-center align-items-center justify-content-center' style={{position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px', top: '400vh'}}>
        <Col xs={6}>
          <div>
            <h1 style={{marginBottom: '0px'}}>Contact</h1><h2><a href="mailto:peter@bronze56k.com">peter@bronze56k.com</a></h2>
            <a href="https://www.instagram.com/solojazz/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="80" height="80" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg></a>
          </div>
        </Col>
      </Row>
      
    </Container>

    </Scroll>

   </ScrollControls>
    
    </>
  );
}

export default App;
