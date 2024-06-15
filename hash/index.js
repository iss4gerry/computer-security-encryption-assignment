let command = process.argv[2]
let argument = process.argv.slice(3);
const Controller = require('./controller')

switch (command) {
    case "hash":
        Controller.hash(argument[0], argument[1])
        break;

    case "check":
        Controller.check(argument[0], argument[1], argument[2])
        break;

    default:
        Controller.view()
        break;
}
