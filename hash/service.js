const crypto = require('crypto')

class Service {
    static hash (password, salt, callback) {

        const hash  = crypto.createHash('sha256')
        const saltedData = password + salt
        hash.update(saltedData)

        const hashedData = hash.digest('hex')

        callback(hashedData)
    }

    static check(password, hash, salt, callback) {
        const hashedPassword = crypto.createHash('sha256')
        const saltedData = password + salt
        hashedPassword.update(saltedData)
        const checkPassword = hashedPassword.digest('hex')
        const result = checkPassword === hash ? 'Password Benar' : 'Password Salah'
        callback(result)
    }   
    
}

module.exports = Service