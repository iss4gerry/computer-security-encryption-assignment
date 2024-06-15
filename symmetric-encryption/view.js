class View {
    static indexView(){
        console.log(`
        ------------------------------------------------

        node index.js encrypt <plaintext> <key> <iv> 
        node index.js decrypt <encryptedtext> <key> <iv>

        ------------------------------------------------
        `);
    }

    static encryptView(result) {
        console.log('Encrypted:', result);
    }

    static decryptView(result) {
        console.log('Decrypted:', result);
    }
}

module.exports = View