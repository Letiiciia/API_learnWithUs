const { bringAll } = require('../services/accountService');
const services = require('../services/accountService');
const repository = require('../repository/accountRepository');
const status = require('../utils/statusCode');

// const addAccount = (request, response) => {
//     console.log(request.url);

//     const body = request.body;

//     const user = new User_learnWithUs(body);

//     user.save((error) => {
//         if (error) {
//             return response.status(status.Error).send({ Message: 'Fail to creat new account' });
//         } else {
//             return response.status(status.Success).send({ user });
//         }
//     })
// }

 const getAccounts = async (request, response) => {
     
    console.log(request.url);

     if(bringAll() == 502){

         return response.status(status.BadGetWay).send({message: 'Error internal method.'})
     }else if(bringAll() == "OK"){

        const user = await repository.bringAccounts();
        return response.status(status.Success).send({ user });
     }else{

        return response.status(status.Error).send({ message: 'Error to bring accounts' })
     }
 }

// const updateAccount = (request, response) => {
//     console.log(request.url);
//     const id = request.params.id;
//     const body = request.body;
//     const update = { new: true };

//     User_learnWithUs.findByIdAndUpdate(
//         id,
//         body,
//         update,
//         (error, account) => {
//             if (error) {
//                 return response.status(status.Error).send({ message: 'Fail to update the account' });
//             } else {
//                 return response.status(status.Success).send({ message: 'Account successfully updated', account });
//             }
//         }
//     )
// }

// const deleteAccount = (request, response) => {
//     console.log(request.url);
//     const id = request.params.id;

//     User_learnWithUs.findByIdAndDelete({ _id: id }, (error) => {
//         if (error) {
//             return response.status(status.Error).send({ message: 'Fail to delete the account' });
//         } else {
//             return response.status(status.Success).send({ message: 'Account deleted' })
//         }
//     })
// }


module.exports = {
    //addAccount,
     getAccounts
    // updateAccount,
    // deleteAccount
}