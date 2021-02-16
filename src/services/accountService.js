const { bringAccounts } = require('../repository/accountRepository');
const repository = require('../repository/accountRepository');
const status = require('../utils/statusCode');

module.exports = {
    bringAll: () =>{
        if(repository.bringAccounts() == "error"){
            return status.BadGetWay
        }else{
            return "OK"
        }
    },
}