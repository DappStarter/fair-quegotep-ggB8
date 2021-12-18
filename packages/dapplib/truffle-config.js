require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot blanket razor oval update grace light army gift'; 
let testAccounts = [
"0xa98fe0d16a21ed3208c465b339bb0add85e033879367baf4250a272482906b59",
"0x9b369697330ac3ee65084c2d3a4de1eba4f54819270e98b0ebb218bb497431ae",
"0x2dac17fe0519065243cf47567ee0b4bb21e29c67c7f66e539432747aa740777a",
"0xbac02abb37a696219e6fe9f677a833a08bfa3e386afa7f53f71fcdda37c39513",
"0xd1aa1a7e7f8e2ef03598d054fcf901154de795e6c2373921ba6281461c0b8656",
"0xcf7e9680d71a66df2763e91a5ef7def54fdea46624da3d630e2974e05e54cca4",
"0x0b0ca1a7d6067324735eea06ab2b198c11adb085438a027055993dd54c473cf4",
"0xcb771c4fb1e60c912c4ba9b54d994e30200a2ca084d8591ace8fbd775134e0f4",
"0xbee4334c3ee30d7923ff70b18b824cd6be0513dc36a7244f802d4392c4c68f44",
"0x9e3ba528a206c364bb9e6c6728a438dcba5ac2206ff5bcb6eba3af3cc23afa97"
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

