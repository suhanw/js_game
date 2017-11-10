export const hasHorizontalCollision = (firstChar, secondChar) => {
  // get half width
  const firstCharHalfWidth = (firstChar.size.width / 2);
  // get center
  const firstCharCenter = firstChar.pos.left + firstCharHalfWidth;

  // get half width
  const secondCharHalfWidth = (secondChar.size.width / 2);
  // get center
  const secondCharCenter = secondChar.pos.left + secondCharHalfWidth;

  // if difference between centers l.t. sum of halves -> collide!
  const distBetwCenters = Math.abs(firstCharCenter - secondCharCenter);
  const sumWidthHalves = firstCharHalfWidth + secondCharHalfWidth;
  // horizontal collision
  const hasCollided = (distBetwCenters < sumWidthHalves);
  return hasCollided;
};


export const inflictDamage = (firstChar, secondChar) => {
  if (firstChar.doing === 'attack' && secondChar.doing !== 'attack') {
    secondChar.health -= 2;
    return true;
  } else if (firstChar.doing !== 'attack' && secondChar.doing === 'attack') {
    firstChar.health -= 2;
    return true;
  }
  return false;
};
