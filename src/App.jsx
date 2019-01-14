import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ReactBootstrapSlider from 'react-bootstrap-slider';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
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
    const { sliderValue } = this.state;
    return (
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={6} md={2}>

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
