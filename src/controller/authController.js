const User_learnWithUs = require('../model/userSchema');
const status = require('../utils/statusCode');

const user = (request, response) => {
    console.log("ok")
    console.log(request.url);

    const body = request.body

    const user = new User_learnWithUs(body);
    

    user.save((error) => {
        if (error) {
            return response.status(status.Error).send({ Message: 'Error' });
        } else {
            return response.status(status.Success).send({ user })
        }

    })
}


module.exports = {
    user
}