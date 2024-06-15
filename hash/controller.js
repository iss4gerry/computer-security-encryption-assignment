const Service = require('./service')
const View = require('./view')

class Controller {
    static hash (password, salt) {
        Service.hash (password, salt, (result) => {
            View.hashView(result)
        })
    }

    static check (password, hash, salt) {
        Service.check (password, hash, salt, (result) => {
            View.checkView(result)
        })
    }

    static view () {
        View.indexView()
    }
    
}

module.exports = Controller