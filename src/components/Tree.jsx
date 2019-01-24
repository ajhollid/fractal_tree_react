import React, { Component } from 'react';
import ColorUtils from '../utils/ColorUtils.js';
import NumberUtils from '../utils/NumberUtils.js';

class Tree extends Component {
  constructor( props ) {
    super( props );

    // Canvas setup
    this.fractalCanvasRef = React.createRef();
    this.leafCanvasRef = React.createRef();
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;
    this.MARGIN = 200;

    // Leaves
    this.floor = [];
    this.leaves = [];
    this.branchesFinished = 0;
    this.treesCompleted = 0;

    // Function binding
    this.dropLeaves = this.dropLeaves.bind( this );
    this.setupCanvases = this.setupCanvases.bind( this );
    this.dropLeaves = this.dropLeaves.bind( this );
    this.drawBranch = this.drawBranch.bind( this );
    this.drawTree = this.drawTree.bind( this );
    this.setParams = this.setParams.bind( this );
  }


  componentDidMount() {
    this.fractalCanvas = this.fractalCanvasRef.current;
    this.leafCanvas = this.leafCanvasRef.current;
    this.setupCanvases();
  }

  setupCanvases() {
    this.fractalCtx = this.fractalCanvas.getContext( '2d' );
    this.leafCtx = this.leafCanvas.getContext( '2d' );
    this.leafCanvas.width = window.innerWidth;
    this.leafCanvas.height = window.innerHeight;
    this.leafCtx.canvas.width = this.WIDTH;
    this.leafCtx.canvas.height = this.HEIGHT;
    this.fractalCanvas.width = window.innerWidth;
    this.fractalCanvas.height = window.innerHeight;
    this.fractalCtx.canvas.width = this.WIDTH;
    this.fractalCtx.canvas.height = this.HEIGHT;
  }

  setParams( params ) {
    this.params = params;
  }

  dropLeaves() {
    let usedLeaves = [];
    this.leafCtx.clearRect( 0, 0, this.WIDTH, this.HEIGHT );
    while ( this.leaves.length ) {
      const leaf = this.leaves.splice( NumberUtils.randomInt( this.leaves.length ), 1 )[0];
      const stickyTest = NumberUtils.randomFactor( 0, 100 );
      if ( stickyTest < leaf.stickyThreshold ) {
        leaf.dropped = true;
      }

      if ( leaf.dropped && !leaf.isDown ) {
        leaf.y += NumberUtils.randomFactor( 0, 1 );
        leaf.x += NumberUtils.randomFactor( -2, 2.5 );
      }
      // add leaf to used leaves
      if ( leaf.y < this.HEIGHT ) {
        usedLeaves.push( leaf );
      } else {
        leaf.x = Math.floor( leaf.x );
        leaf.y = this.HEIGHT - 2;
        if ( leaf.x % 2 ) {
          leaf.x += 1;
        }
        leaf.isDown = true;
        if ( !this.floor[leaf.x] ) {
          this.floor[leaf.x] = leaf.x;
          usedLeaves.push( leaf );
        }
      }
      // draw Leaf
      this.leafCtx.beginPath();
      this.leafCtx.fillStyle = leaf.color;
      this.leafCtx.moveTo( leaf.x, leaf.y );
      this.leafCtx.fillRect( Math.floor( leaf.x ), Math.floor( leaf.y ), 2, 2 );
      this.leafCtx.lineWidth = 1;
      this.leafCtx.stroke();
    }
    // Reset arrays
    this.leaves = usedLeaves;
    usedLeaves = [];
    if ( this.leaves.filter( leaf => leaf.y < this.HEIGHT - 2 )
    && this.treesCompleted === this.params.maxTrees ) {
      requestAnimationFrame( this.dropLeaves );
    }
  }

  drawBranch( x, y, a, l, strokeWidth, count, colors, treeId ) {
    let frameCount = 1;
    let waypoints = [];
    function drawLine( callback, ctx ) {
      function animateLine() {
        if ( ctx.currentTree !== treeId ) {
          return;
        }
        ctx.fractalCtx.beginPath();
        ctx.fractalCtx.moveTo( waypoints[frameCount - 1].x, waypoints[frameCount - 1].y );
        ctx.fractalCtx.lineTo( waypoints[frameCount].x, waypoints[frameCount].y );
        ctx.fractalCtx.strokeStyle = colors.trunkColors[count];
        ctx.fractalCtx.lineWidth = strokeWidth;
        ctx.fractalCtx.stroke();
        ctx.fractalCtx.closePath();
        frameCount += 1;
        if ( frameCount < waypoints.length - 1 ) {
          requestAnimationFrame( animateLine );
        } else {
          callback();
        }
      }
      animateLine();
    }
    if ( count <= this.params.maxDepth ) {
      const newCount = count + 1;
      const newX = x + Math.cos( a ) * l;
      const newY = y + Math.sin( a ) * l;

      waypoints = NumberUtils.buildWaypoints( x, y, newX, newY, this.params.frameRate );
      drawLine( () => {
        this.drawBranch(
          newX, newY,
          a - this.params.angleIncrement * NumberUtils.randomFactor(
            1, this.params.randomAngleMax,
          ),
          l * NumberUtils.randomFactor(
            this.params.minLengthFactor, this.params.maxLengthFactor,
          ),
          strokeWidth * 0.7,
          newCount,
          colors,
          treeId,
        );
        this.drawBranch(
          newX, newY,
          a + this.params.angleIncrement * NumberUtils.randomFactor(
            1, this.params.randomAngleMax,
          ),
          l * NumberUtils.randomFactor( this.params.minLengthFactor, this.params.maxLengthFactor ),
          strokeWidth * 0.7,
          newCount,
          colors,
          treeId,
        );
      }, this );
      if ( count === this.params.maxDepth ) {
        this.leafCtx.beginPath();
        this.leaves.push( {
          x: newX,
          y: newY,
          color: colors.treeColor,
          stickyThreshold: NumberUtils.randomFactor( 0, 1 ),
          dropped: false,
        } );
        this.leafCtx.fillStyle = colors.treeColor;
        this.leafCtx.fillRect( newX, newY, 2, 2 );
        this.leafCtx.lineWidth = 1;
        this.leafCtx.stroke();
      }
    } else {
      this.inProgress = false;
      this.branchesFinished += 1;
      // Check and see if all branches have been drawn, if so draw next tree
      if ( this.branchesFinished === 2 ** ( this.params.maxDepth + 1 ) ) {
        this.branchesFinished = 0;
        this.treesCompleted += 1;
        if ( this.treesCompleted < this.params.maxTrees ) {
          this.drawTree(
            ColorUtils.interpolateColors( ColorUtils.getBaseColor(), this.params.maxDepth ),
          );
        } else {
          this.dropLeaves();
        }
      }
    }
  }

  drawTree( colors ) {
    const treeId = Math.random();
    this.currentTree = treeId;
    this.drawBranch(
      NumberUtils.randomFactor( this.MARGIN, this.WIDTH - this.MARGIN ),
      this.HEIGHT,
      -Math.PI / 2,
      this.params.trunkLength
        ? this.HEIGHT * this.params.trunkLength
        : this.HEIGHT * NumberUtils.randomFactor( 0.05, 0.25 ),
      NumberUtils.randomFactor( 1, this.params.trunkWidth ),
      0,
      colors,
      treeId,
    );
  }

  start() {
    this.leaves = [];
    this.treesCompleted = 0;
    this.leafCtx.clearRect( 0, 0, this.leafCanvas.width, this.leafCanvas.height );
    this.fractalCtx.clearRect( 0, 0, this.fractalCanvas.width, this.fractalCanvas.height );
    this.drawTree(
      ColorUtils.interpolateColors( ColorUtils.getBaseColor(), this.params.maxDepth ),
    );
  }

  render() {
    return (
      <div>
        <canvas className="fractal_canvas" ref={this.fractalCanvasRef} />
        <canvas className="leaf_canvas" ref={this.leafCanvasRef} />
      </div>
    );
  }
}

export default Tree;
