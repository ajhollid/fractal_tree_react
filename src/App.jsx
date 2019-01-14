import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ReactBootstrapSlider from 'react-bootstrap-slider';


class App extends Component {
  render() {
    console.log( 'wtf' );
    return (
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} md={2}>
              <code>
                {/* {'<Col xs={12} md={2} />'} */}
                <ReactBootstrapSlider
                  value={5}
                  min={0}
                  max={10}
                  step={1}
                  enabled="enabled"
                />
              </code>
            </Col>
            <Col xs={6} md={10}>
              <code>{'<Col xs={6} md={10} />'}</code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
