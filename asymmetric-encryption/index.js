let command = process.argv[2]
let argument = process.argv.slice(3);
const Controller = require('./controller')

switch (command) {
    case "generate": 
        Controller.generate()
        break;

    case "encrypt":
        Controller.encrypt(argument[0], argument[1])
        break;

    case "decrypt":
        Controller.decrypt(argument[0], argument[1])
        break;

    default:
        Controller.view()
        break;
}
