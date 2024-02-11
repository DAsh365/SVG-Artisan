const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./Circle');
const Square = require('./Square');
const Triangle = require('./Triangle');

class LogoGenerator {
    constructor() {
        this.shapeChoices = ['Circle', 'Square', 'Triangle'];
    }

    async generate() {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the text:',
                validate: function(input) {
                    return input.length > 0 && input.length <= 3;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hexadecimal):',
                default: 'white'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape:',
                choices: this.shapeChoices
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal):',
                default: 'green'
            }
        ]);

        let shape;
        switch (userInput.shape) {
            case 'Circle':
                shape = new Circle(150, 100, 80, userInput.shapeColor, userInput.text);
                break;
            case 'Square':
                shape = new Square(50, 50, 200, userInput.shapeColor, userInput.text);
                break;
            case 'Triangle':
                shape = new Triangle('150,50 250,150 50,150', userInput.shapeColor, userInput.text);
                break;
            default:
                console.log('Invalid shape.');
                return;
        }

        const svgContent = shape.render();
        const fileName = 'logo.svg';
        fs.writeFileSync(fileName, svgContent);
        console.log(`Generated ${fileName}`);
    }
}

module.exports = LogoGenerator;