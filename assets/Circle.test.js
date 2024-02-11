const Circle = require('./Circle');

test('renders a circle with text', () => {
    const circle = new Circle(150, 100, 80, 'green', 'SVG');
    const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>';
    expect(circle.render()).toEqual(expectedSVG);
});