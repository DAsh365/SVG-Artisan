class Triangle {
    constructor(points, fill, text) {
        this.points = points;
        this.fill = fill;
        this.text = text;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="${this.points}" fill="${this.fill}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
                </svg>`;
    }
}

module.exports = Triangle;