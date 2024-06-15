class View {
    static indexView(){
        console.log(`
        ------------------------------------------------

        node index.js hash <password> <salt> 
        node index.js check <password> <hashedpassword> <salt>

        ------------------------------------------------
        `);
    }

    static hashView(result) {
        console.log('HASH:', result);
    }

    static checkView(result) {
        console.log('Hasil:', result);
    }
}

module.exports = View