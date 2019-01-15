import React, { Component } from 'react';
import { Button } from 'react-bootstrap-buttons';
import Controls from './Controls.jsx';
import Tree from './Tree.jsx';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: false,
      maxTrees: 1, // Min 1, Max 20, Step 1, def 1
      maxDepth: 10, // Min 1, Max 22, Step 1, def 10
      frameRate: 7, // Min 1, Max 100, Step 1, def 20
      baseColor: 'rgb(255, 255, 255)',
      angleIncrement: Math.PI / 8,
      randomAngleMax: 1.5, // Min 0, Max 10, step 0.25, def 1.5
      trunkWidth: 10, // Min 0, Max 100, step 1, def 10
      minLengthFactor: 0.05, // Min 0, Max 0.3, step 0.025, def 0.05
      maxLengthFactor: 0.25, // Min 0, Max 0.3, step 0.025, def 0.05
      willAnimate: true,
    };
    this.onChange = this.onChange.bind( this );
  }

  onChange( e, name ) {
    this.setState( {
      [name]: e.target.value,
    } );
  }

  render() {
    const {
      open, maxTrees, maxDepth, frameRate, baseColor, angleIncrement, randomAngleMax, trunkWidth, minLengthFactor, maxLengthFactor,
      willAnimate,
    } = this.state;
    return (
      <div>
        <Controls
          open={open}
          onChange={this.onChange}
          maxTrees={maxTrees}
          maxDepth={maxDepth}
          frameRate={frameRate}
          baseColor={baseColor}
          angleIncrement={angleIncrement}
          randomAngleMax={randomAngleMax}
          trunkWidth={trunkWidth}
          minLengthFactor={minLengthFactor}
          maxLengthFactor={maxLengthFactor}
        />
        <div className="background">
          <Tree willAnimate={willAnimate} />

        </div>

        <Button className="controlButton" btnStyle="primary" outline onClick={() => this.setState( { open: !open, willAnimate: open } )}>Collapse/Open</Button>

      </div>
    );
  }
}

export default App;
