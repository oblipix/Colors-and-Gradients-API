const colors = [
  { name: 'Ocean Blue', hex: '#0077be', rgb: '0, 119, 190', hsl: '200, 100%, 37%' },
  { name: 'Sunset Orange', hex: '#ff4500', rgb: '255, 69, 0', hsl: '16, 100%, 50%' },
  { name: 'Mint Green', hex: '#3eb489', rgb: '62, 180, 137', hsl: '155, 49%, 47%' }
];

const gradients = [
  { name: 'Sunset Glow', colors: ['#ff7e5f', '#feb47b'], direction: 'to right' },
  { name: 'Ocean Wave', colors: ['#00c6ff', '#0072ff'], direction: 'to bottom' },
  { name: 'Purple Dream', colors: ['#a18cd1', '#fbc2eb'], direction: '45deg' }
];

module.exports = { colors, gradients };
