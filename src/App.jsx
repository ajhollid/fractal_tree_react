import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Collapse from 'react-bootstrap/lib/Collapse';
import ReactBootstrapSlider from 'react-bootstrap-slider';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: false,
      sliderValue: 5,
    };
    this.onSliderChange = this.onSliderChange.bind( this );
  }

  onSliderChange( e ) {
    this.setState( {
      sliderValue: e.target.value,
    } );
  }

  render() {
    const { sliderValue, open } = this.state;
    return (
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <Collapse in={open} dimension="height">
              <div>
                <Col xs={12} md={2}>

                  <Row className="show-grid">
                    {/* {'<Col xs={12} md={2} />'} */}
                    <Col xs={6} md={10}>
                      <ReactBootstrapSlider
                        value={sliderValue}
                        change={this.onSliderChange}
                        min={0}
                        max={10}
                        step={1}
                        enabled="enabled"
                      />
                    </Col>
                    <Col xs={6} md={2}>
                      <p>{sliderValue}</p>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Collapse>
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
