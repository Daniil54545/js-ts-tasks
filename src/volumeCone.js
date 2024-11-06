/**
 * Calculate the volume of a cone given its height and radius
 * @param {number} r - The radius of the cone
 * @param {number} h - The height of the cone
 * @returns {number} - The volume of the cone
 */
module.exports.calculateConeVolume = function calculateConeVolume(r, h) {
  if (typeof r !== 'number' || typeof h !== 'number' || r < 0 || h < 0) {
    throw new Error('Invalid input');
  }

  const volume = (1/3) * Math.PI * Math.pow(r, 2) * h;
  return volume;
};

console.log(module.exports.calculateConeVolume(3, 5)); 
