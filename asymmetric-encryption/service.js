const { generateKeyPairSync, publicEncrypt, privateDecrypt} = require('crypto')

class Service {

    static generate(callback) {
        const { privateKey, publicKey } = generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        });

        callback('\n\nPublic Key: ' + publicKey + '\n\n\nPrivate Key: ' + privateKey)
}

    static encrypt (plainText, publicKey, callback) {
        const publicKeyPEM = `-----BEGIN PUBLIC KEY-----\n${Buffer.from(publicKey.toString(), 'base64').toString('base64').match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`
        const encryptedText = publicEncrypt(publicKeyPEM, Buffer.from(plainText)).toString('hex');
        callback(encryptedText)
    }

    static decrypt(encryptedText, privateKey, callback) {
        const privateKeyPEM = `-----BEGIN PRIVATE KEY-----\n${Buffer.from(privateKey, 'base64').toString('base64').match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`
        const decryptedMessage = privateDecrypt(privateKeyPEM, Buffer.from(encryptedText, 'hex')).toString()
        // Kembalikan teks terdekripsi
        callback(decryptedMessage)
    }
    
}

module.exports = Service