var Contract = require('./abi');
var myContract = Contract.myContract;
var web3 = Contract.web3;

web3.setProvider(
    new web3.providers.HttpProvider('http://127.0.0.1:7545')
)

class web3js {
    makeAccounts(data) {
        console.log('web3js로 넘어온 데이터 : ', data);
        return new Promise(
            async (resolve, reject) => {
                try {
                    var newAccount = await web3.eth.personal.newAccount(data);
                    resolve(newAccount);
                } catch (err) {
                    reject(err);
                }
            } 
        )
    }
}

module.exports = new web3js();