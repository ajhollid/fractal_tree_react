import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Collapse from 'react-bootstrap/lib/Collapse';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Button } from 'react-bootstrap-buttons';


class Test extends Component {
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
        <Collapse in={open}>
          <div className="controlbox">
            <Grid fluid>
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
            </Grid>
          </div>
        </Collapse>
        <div className="background">

          <p>Background</p>
          <Button btnStyle="secondary" outline onClick={() => this.setState( { open: !open } )}>Collapse/Open</Button>

        </div>
      </div>
    );
  }
}
export default Test;
