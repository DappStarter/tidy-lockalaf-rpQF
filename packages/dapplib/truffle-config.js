require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food shoulder random pulse collect gesture cover army genius'; 
let testAccounts = [
"0xa9bdc66dcb84c39a6940c02989154f2237d7b52355c7b811d515779a377a0c52",
"0x8edb83225df20b454db62bd2d280d746f99c8849140561b731bbe5113dce6b35",
"0x8b4a5a9e0b833eb279019feb76cb0e7858d3a6ae733df972ae066faaed48ed2b",
"0x691cb59fa6a938bd57111da1bc429d3430d5957acf2fbae8e0548e0691a51807",
"0x09f2eca68621fff457c52c37ca7404a729d4cf4a08ed658d7f1da18bdbffce18",
"0x7887c569105ebb8046b53d23225b939760d4e2baf4e094a096f0e94993e9f85c",
"0x2f99107916a7dc07bf974c28bb7ecb7acf82c01fdcf43306b6d7d9f203df4caf",
"0xfbc69a6162cbb2ae62d33af007cc512afa1343d92a559249bbec56b4e1ad586f",
"0xe9c44795eb2388fffb5cd1ac1b157e0220b1536a49cf9abef4f6faf1175e38dd",
"0xd744acadea96e6d18b6175bc4bd7de31b0cd9dee09c75d884e60246a2474b725"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

