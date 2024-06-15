class View {
    static indexView(){
        console.log(`
        ------------------------------------------------
        
        node index.js generate 
        node index.js encrypt <plaintext> <publickey>
        node index.js decrypt <encryptedtext> <privatekey>

        ------------------------------------------------
        `);
    }

    static generateView(result) {
        console.log(result)
    }

    static encryptView(result) {
        console.log('\n \nEncrypted:', result);
    }

    static decryptView(result) {
        console.log('Decrypted:', result);
    }
}

module.exports = View