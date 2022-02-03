import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect, useState } from 'react';

function App() {

  const [colorArray, setColorArray] = useState(['black', 'blue', 'yellow', 'green', 'red', 'pink', 'violet'])
  const [colorIndex, setColorIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(colorArray[colorIndex])

  const createColorManager = (e) => {
    e.preventDefault()
    let tempIndex = colorIndex

    return {
      get: function () {
        setSelectedColor(colorArray[tempIndex])
        return colorArray[colorIndex]
      },

      next: function () {
        tempIndex += 1
        if (tempIndex >= colorArray.length) {
          tempIndex = 0
        }
        setColorIndex(tempIndex)
        return this.get()
      },

      prev: function () {
        tempIndex -= 1
        if (tempIndex < 0) {
          tempIndex = colorArray.length - 1
        }
        setColorIndex(tempIndex)
        return this.get()
      },

      reset: function () {
        tempIndex = 0
        setColorIndex(tempIndex)
        return this.get()
      },

    }

  }

  useEffect(() => {

  }, [colorIndex, selectedColor])

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col className="col-12 d-flex justify-content-center mt-5">
            <h1>Color Array: (Default)
              {
                colorArray.map((color) => {
                  return <span key={color} style={{ color: color }}> {color}, </span>
                })
              }
            </h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="col-12 d-flex justify-content-center">
            <Button variant="danger" onClick={(e) => createColorManager(e).prev()}>Prev Color</Button>
            <Button variant="primary" onClick={(e) => createColorManager(e).next()}>Next Color</Button>
            <Button variant="secondary" onClick={(e) => createColorManager(e).reset()}>Reset Color</Button>
          </Col>
          <Col className="col-12 d-flex justify-content-center">
            <h1>Return Color {selectedColor}</h1>
          </Col>
          <Col className="col-12">
            <Container
              className="box"
              style={{ background: selectedColor }}
            >
            </Container>
          </Col>
        </Row>

      </Container>

    </Fragment>
  );
}

export default App;
