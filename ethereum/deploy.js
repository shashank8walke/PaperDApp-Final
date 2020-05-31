const WalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new WalletProvider(
        'crystal vote net brick depend snow lucky arrive crystal rebuild tape cause' ,
        'https://rinkeby.infura.io/v3/ffd0b457c58342deb84aa6f580768f1b'
);

const web3 = new Web3(provider);

const deploy = async () =>{
        const accounts = await web3.eth.getAccounts();

        console.log("Attempting to access account", accounts[0]);

        const result = await new web3.eth.Contract(
          JSON.parse(compiledFactory.interface))
            .deploy({data: '0x' + compiledFactory.bytecode})
            .send({from: accounts[0], gas: '3000000'});
        console.log("contract deployed to:", result.options.address);

};
deploy();
