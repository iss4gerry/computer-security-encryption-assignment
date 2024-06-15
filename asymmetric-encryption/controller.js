const Service = require('./service')
const View = require('./view')

class Controller {

    static generate(){
        Service.generate((result) => {
            View.generateView(result)
        })
    }

    static encrypt (plainText, key) {
        Service.encrypt (plainText, key, (result) => {
            View.encryptView(result)
        })
    }

    static decrypt (encryptedText, key) {
        Service.decrypt (encryptedText, key, (result) => {
            View.decryptView(result)
        })
    }

    static view () {
        View.indexView()
    }
    
}

module.exports = Controller