import NumberUtils from './NumberUtils';

const COLORS = [
  'rgb(228,48,48)',
  'rgb(222,127,40)',
  'rgb(232,230,23)',
  'rgb(189,227,228)',
  'rgb(142, 183, 134)',
];


function getRandomTreeColor() {
  return COLORS[NumberUtils.randomInt( COLORS.length )];
}

function interpolateColor( startColor, endColor, factor ) {
  let stepFactor = factor;
  if ( arguments.length < 3 ) {
    stepFactor = 0.5;
  }
  const result = startColor.slice();
  for ( let i = 0; i < 3; i += 1 ) {
    result[i] = Math.round( result[i] + stepFactor * ( endColor[i] - startColor[i] ) );
  }
  const colorObj = {
    r: result[0],
    g: result[1],
    b: result[2],
  };
  return colorObj;
}

function interpolateColors( color1, steps ) {
  const color2 = getRandomTreeColor();
  const stepFactor = 1 / ( steps - 1 );
  const interpolatedColorArray = [];
  const startColor = color1.match( /\d+/g ).map( Number );
  const endColor = color2.match( /\d+/g ).map( Number );
  for ( let i = 0; i < steps; i += 1 ) {
    interpolatedColorArray.push( interpolateColor( startColor, endColor, stepFactor * i ) );
  }
  return {
    treeColor: color2,
    trunkColors: interpolatedColorArray.map( colorObj => ( `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})` ) ),
  };
}

export default { getRandomTreeColor, interpolateColors };
