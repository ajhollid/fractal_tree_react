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
      frameRate: 20, // Min 1, Max 100, Step 1, def 20
      baseColor: 'rgb(255, 255, 255)',
      angleIncrement: Math.PI / 8,
      randomAngleMax: 1.5, // Min 0, Max 10, step 0.25, def 1.5
      trunkWidth: 10, // Min 0, Max 100, step 1, def 10
      minLengthFactor: 0.5, // Min 0, Max 0.3, step 0.025, def 0.05
      maxLengthFactor: 0.9, // Min 0, Max 0.3, step 0.025, def 0.05
    };

    this.tree = React.createRef();
    this.onChange = this.onChange.bind( this );
    this.startDrawing = this.startDrawing.bind( this );
  }


  onChange( e, name ) {
    this.setState( {
      [name]: e.target.value,
    } );
  }

  startDrawing() {
    const {
      maxTrees,
      maxDepth,
      frameRate,
      angleIncrement,
      randomAngleMax,
      trunkWidth,
      minLengthFactor,
      maxLengthFactor,
    } = this.state;
    this.tree.current.setParams( {
      maxTrees,
      maxDepth,
      frameRate,
      angleIncrement,
      randomAngleMax,
      trunkWidth,
      minLengthFactor,
      maxLengthFactor,
    } );
    this.tree.current.start();
  }


  render() {
    const {
      open,
      maxTrees,
      maxDepth,
      frameRate,
      baseColor,
      angleIncrement,
      randomAngleMax,
      trunkWidth,
      minLengthFactor,
      maxLengthFactor,
    } = this.state;
    return (
      <div>
        <Controls
          open
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
          startDrawing={this.startDrawing}
        />
        <div className="background">
          <Tree
            ref={this.tree}
            baseColor={baseColor}
          />

        </div>

        <Button className="controlButton" btnStyle="primary" outline onClick={() => this.setState( { open: !open } )}>Collapse/Open</Button>

      </div>
    );
  }
}

export default App;
