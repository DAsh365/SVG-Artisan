class Square {
    constructor(x, y, size, fill, text) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = fill;
        this.text = text;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.fill}" />
                    <text x="${this.x + this.size / 2}" y="${this.y + this.size / 2}" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
                </svg>`;
    }
}

module.exports = Square;