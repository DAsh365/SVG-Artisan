class Circle {
  constructor(cx, cy, r, fill, text) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.fill = fill;
      this.text = text;
  }

  render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />
                  <text x="${this.cx}" y="${this.cy + 25}" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
              </svg>`;
  }
}

module.exports = Circle;