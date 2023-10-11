import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Album, Photo } from './components/Index'
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Row>
          <Col>
            <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col md={2} xs={12}>
            <ul>
              <li><Link to={'/album'}>Albums</Link></li>
              <li><Link to={'/photo'}>Photo</Link></li>
            </ul>
          </Col>
          <Col md={10} xs={12}>
            <Routes>
              <Route path='/' element={<Photo />} />
              <Route path='/album' element={<Album />} />
              <Route path='/photo' element={<Photo />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
