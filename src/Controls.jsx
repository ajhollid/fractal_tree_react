import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Collapse from 'react-bootstrap/lib/Collapse';
import ReactBootstrapSlider from 'react-bootstrap-slider';


class Controls extends Component {
  render() {
    const {
      open, onChange, maxTrees, maxDepth, frameRate, randomAngleMax, trunkWidth, minLengthFactor, maxLengthFactor,
    } = this.props;
    return (
      <div>
        <Collapse in={open}>
          <div className="controlbox">
            <Grid fluid>

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
                    max={12}
                    step={1}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <p>Max Depth:</p>
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
                  <p>Max Angle Increment:</p>
                </Col>
                <Col xs={6} md={2}>
                  {randomAngleMax}
                </Col>
              </Row>

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
                    max={0.3}
                    step={0.025}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <p>Min Branch Length Factor:</p>
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
                    max={0.3}
                    step={0.025}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <p>Max Branch Length Factor:</p>
                </Col>
                <Col xs={6} md={2}>
                  {maxLengthFactor}
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
