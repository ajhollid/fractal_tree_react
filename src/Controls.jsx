import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

import Collapse from 'react-bootstrap/lib/Collapse';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { cpus } from 'os';


class Controls extends Component {
  render() {
    const {
      open, onChange, maxTrees, maxDepth, frameRate, randomAngleMax, trunkWidth, minLengthFactor, maxLengthFactor, trunkLength,
    } = this.props;
    return (
      <div>
        <Collapse in={open}>
          <div className="controlbox">
            <Grid fluid>
              <Row className="show-grid">
                <Col xs={6} md={12}>
                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={maxTrees}
                        change={e => onChange( e, 'maxTrees' )}
                        min={1}
                        max={20}
                        step={1}

                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Max Trees:</p>
                      <br />
                    </Col>
                    <Col xs={6} md={2}>
                      {maxTrees}
                    </Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={maxDepth}
                        change={e => onChange( e, 'maxDepth' )}
                        min={1}
                        max={15}
                        step={1}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Max Depth:</p>
                      <br />
                    </Col>
                    <Col xs={6} md={2}>
                      {maxDepth}
                    </Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={frameRate}
                        change={e => onChange( e, 'frameRate' )}
                        min={1}
                        max={100}
                        step={1}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Frame Rate:</p>
                      <br />
                    </Col>
                    <Col xs={6} md={2}>
                      {frameRate}
                    </Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={randomAngleMax}
                        change={e => onChange( e, 'randomAngleMax' )}
                        min={0}
                        max={10}
                        step={0.25}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Max Angle Randomness:</p>
                    </Col>
                    <Col xs={6} md={2}>
                      {randomAngleMax}
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} md={12}>
                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={trunkWidth}
                        change={e => onChange( e, 'trunkWidth' )}
                        min={1}
                        max={100}
                        step={1}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Max Trunk Width:</p>
                    </Col>
                    <Col xs={6} md={2}>
                      {trunkWidth}
                    </Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={minLengthFactor}
                        change={e => onChange( e, 'minLengthFactor' )}
                        min={0}
                        max={1}
                        step={0.1}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Min Branch Length:</p>
                    </Col>
                    <Col xs={6} md={2}>
                      {minLengthFactor}
                    </Col>
                  </Row>

                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={maxLengthFactor}
                        change={e => onChange( e, 'maxLengthFactor' )}
                        min={0}
                        max={1}
                        step={0.1}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Max Branch Length:</p>
                    </Col>
                    <Col xs={6} md={2}>
                      {maxLengthFactor}
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={12} md={6}>
                      <ReactBootstrapSlider
                        value={trunkLength}
                        change={e => onChange( e, 'trunkLength' )}
                        min={0}
                        max={1}
                        step={0.025}
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <p>Trunk Length:</p>
                    </Col>
                    <Col xs={6} md={2}>
                      {trunkLength}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button bsStyle="primary" change={this} onClick={() => this.props.startDrawing()}>Draw</Button>
                </Col>
              </Row>

            </Grid>

          </div>
        </Collapse>
      </div>
    );
  }
}
export default Controls;
