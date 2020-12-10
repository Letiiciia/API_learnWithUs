const User_learnWithUs = require('../model/accountSchema');
const status = require('../utils/statusCode');

const addAccount = (request, response) => {
    console.log(request.url);

    const body = request.body;

    const user = new User_learnWithUs(body);

    user.save((error) => {
        if (error) {
            return response.status(status.Error).send({ Message: 'Error' });
        } else {
            return response.status(status.Success).send({ user });
        }
    })
}

const getAccounts = async (request, response) => {
    console.log(request.url);
    try {
        const user = await User_learnWithUs.find({});
        return response.status(status.Success).send({ user });
    } catch (error) {
        return response.status(status.Error).send({ message: 'Error to bring every accounts' })
    }
}

const updateAccount = (request, response) => {
    console.log(request.url);
    const id = request.params.id;
    const body = request.body;
    const update = { new: true };

    User_learnWithUs.findByIdAndUpdate(
        id,
        body,
        update,
        (error, account) => {
            if (error) {
                return response.status(status.Error).send({ message: 'Error' });
            } else {
                return response.status(status.Success).send({ account });
            }
        }
    )
}

const deleteAccount = (request, response) => {
    console.log(request.url);
    const id = request.params.id;

    User_learnWithUs.findByIdAndDelete({_id:id}, (error) => {
        if(error){
            return response.status(status.Error).send({message: 'Error'});
        }else{
            return response.status(status.Success).send({message: 'Account deleted'})
        }
    })
}


module.exports = {
    addAccount,
    getAccounts,
    updateAccount,
    deleteAccount
}