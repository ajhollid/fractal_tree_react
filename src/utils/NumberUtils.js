function randomInt( max ) {
  return Math.floor( Math.random() * max );
}

function randomFactor( min, max ) {
  return min + ( max - min ) * Math.random();
}

function buildWaypoints( startX, startY, endX, endY, frameRate ) {
  const waypoints = [];
  const dx = endX - startX;
  const dy = endY - startY;
  for ( let i = 0; i < frameRate + 2; i += 1 ) {
    const x = startX + dx * i / frameRate;
    const y = startY + dy * i / frameRate;
    waypoints.push( { x, y } );
  }
  return waypoints;
}

export default {
  randomInt,
  randomFactor,
  buildWaypoints,
};
