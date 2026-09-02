import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ImageCegep from './components/ImageCegep';



// app.js
import { Button, Container, Row, Col, } from 'react-bootstrap';
function App() {
return (
<Container>
  <Button variant="primary">Bouton 
  Bootstrap</Button>
  <Row>
    <NavBar/>
  </Row>

  <Row className='border border-dark mt-3 d-flex justify-content-center'>
    <Row className='mt-2'>
      <Col xs={8} className="text-center border mt-2"><ImageCegep/></Col>
      <Col xs={4} className="text-center border mt-2"><Menu/></Col>
    </Row>
  </Row>

  <Row className='mt-3 border border-dark'>
    <Col className="text-center border"><h1>Colonne1</h1></Col>
  </Row>

  <Row className='border mt-3 border-dark d-flex justify-content-center'>
      <Footer/>
  </Row>
  
</Container>
);
}


export default App;


