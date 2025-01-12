const fs = require('fs');

// Fungsi untuk mendapatkan state dan menyimpan kredensial
const UseMyState = async (sessionName) => {
    const credsPath = `./${sessionName}/creds.json`;
    const keysPath = `./${sessionName}/keys.json`;

    const state = {
        creds: fs.existsSync(credsPath) ? require(credsPath) : {},
        keys: fs.existsSync(keysPath) ? require(keysPath) : {},
    };

    const saveCreds = () => {
        fs.writeFileSync(credsPath, JSON.stringify(state.creds, null, 2));
        fs.writeFileSync(keysPath, JSON.stringify(state.keys, null, 2));
    };

    return { state, saveCreds };
};

module.exports = { UseMyState };