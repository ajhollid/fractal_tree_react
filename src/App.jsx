import React, { Component } from 'react';
import { Button } from 'react-bootstrap-buttons';
import Controls from './Controls.jsx';


class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: true,
      maxTrees: 1, // Min 1, Max 20, Step 1, def 1
      maxDepth: 10, // Min 1, Max 22, Step 1, def 10
      frameRate: 7, // Min 1, Max 100, Step 1, def 20
      baseColor: 'rgb(255, 255, 255)',
      angleIncrement: Math.PI / 8,
      randomAngleMax: 1.5, // Min 0, Max 10, step 0.25, def 1.5
      trunkWidth: 10, // Min 0, Max 100, step 1, def 10
      minLengthFactor: 0.05, // Min 0, Max 0.3, step 0.025, def 0.05
      maxLengthFactor: 0.25, // Min 0, Max 0.3, step 0.025, def 0.05
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
          <Button btnStyle="secondary" outline onClick={() => this.setState( { open: !open } )}>Collapse/Open</Button>
          <p>Background</p>

        </div>
      </div>
    );
  }
}

export default App;
