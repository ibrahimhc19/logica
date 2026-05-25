export function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy];
  };
}

export function scale2d(sx, sy) {
  return function(x,y){
    return [x * sx, y * sy];
  }
}

export function composeTransform(f, g) {
    return function(x, y) {
    const [x1, y1] = f(x, y);
    return g(x1, y1);
  };
}

export function memoizeTransform(f) {
  
  let memo = []
  let previousX;
  let previousY;
  // let previousResult;
  
  return function(x,y){
    if (previousX == x && previousY == y) {
      return memo;
    }
    previousX = x;
    previousY = y;
    return memo = f(x,y);
  }
}
