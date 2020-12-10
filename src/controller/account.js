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


module.exports = {
    addAccount,
    updateAccount
}