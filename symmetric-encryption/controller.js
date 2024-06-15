const Service = require('./service')
const View = require('./view')

class Controller {
    static encrypt (plainText, key, iv) {
        Service.encrypt (plainText, key, iv, (result) => {
            View.encryptView(result)
        })
    }

    static decrypt (encryptedText, key, iv) {
        Service.decrypt (encryptedText, key, iv, (result) => {
            View.decryptView(result)
        })
    }

    static view () {
        View.indexView()
    }
    
}

module.exports = Controller