const { createCipheriv, createDecipheriv } = require('crypto')

// const inputKey = 'contoh'
// const inputIv = 'contoh'
// const message = 'example'

// function padKey(key, length) {
//     const buf = Buffer.alloc(length)
//     key.copy(buf, 0, 0, Math.min(key.length, length))
//     return buf
// }

// function padIV(iv, length) {
//     const buf = Buffer.alloc(length)
//     iv.copy(buf, 0, 0, Math.min(iv.length, length))
//     return buf
// }

// const key = padKey(Buffer.from(inputKey, 'utf-8'), 32)
// const iv = padIV(Buffer.from(inputIv, 'utf-8'), 16)

// const cipher = createCipheriv('aes-256-cbc', key, iv)
// let encryptedMessage = cipher.update(message, 'utf-8', 'hex')
// encryptedMessage += cipher.final('hex')
// console.log('Encrypted:', encryptedMessage)

// const decipher = createDecipheriv('aes-256-cbc', key, iv)
// let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
// decryptedMessage += decipher.final('utf-8')
// console.log('Decrypted:', decryptedMessage)

class Service {
    static encrypt (plainText, key, iv, callback) {
        const encryptKey = Buffer.alloc(32, key, 'utf-8')
        const encryptIV = Buffer.alloc(16, iv, 'utf-8')

        const cipher = createCipheriv('aes-256-cbc', encryptKey, encryptIV)
        const encryptedMessage = cipher.update(plainText, 'utf-8', 'hex') + cipher.final('hex')
        callback(encryptedMessage)
    }

    static decrypt(encryptedText, key, iv, callback) {
        // Inisialisasi key dan IV dari string langsung
        const encryptKey = Buffer.alloc(32, key, 'utf-8')
        const encryptIV = Buffer.alloc(16, iv, 'utf-8')
    
        const decipher = createDecipheriv('aes-256-cbc', encryptKey, encryptIV)
        let decryptedMessage = decipher.update(encryptedText, 'hex', 'utf-8') + decipher.final('utf-8')
    
        // Kembalikan teks terdekripsi
        callback(decryptedMessage)
    }
    
}

module.exports = Service