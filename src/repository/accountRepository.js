const User_learnWithUs = require('../model/accountSchema');


module.exports = {
    bringAccounts: () =>{
        try {
            return User_learnWithUs.find();
        } catch (error) {
            return 'error'         
        }
        
    },
}