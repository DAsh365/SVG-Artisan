const Triangle = require('./Triangle');

test('renders a triangle with text', () => {
    const triangle = new Triangle('150,50 250,150 50,150', 'red', 'SVG');
    const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,50 250,150 50,150" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    expect(triangle.render()).toEqual(expectedSVG);
});