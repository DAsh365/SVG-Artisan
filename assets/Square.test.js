const Square = require('./Square');

test('renders a square with text', () => {
    const square = new Square(50, 50, 200, 'blue', 'SVG');
    const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    expect(square.render()).toEqual(expectedSVG);
});