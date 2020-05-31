import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';
//create a instance of a deployed contract by providing contracts ABI and deployed contracts address
const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x57F0031fD6c7fF30263e824A27dd3311791d9f00'
);

export default instance;
