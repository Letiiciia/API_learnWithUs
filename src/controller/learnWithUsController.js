const repository = require('../repository/learnWithUsRepository');
const status = require('../utils/statusCode');




async function getAll(request, response) {
    console.log(request.url);

    var collection = await repository.getAll();
    if (collection == {}) {
        return response.status(status.Error).send('LearnWithUs not found');
    } else {
        return response.status(status.Succes).send(collection);
    }

}





module.exports = {
    getAll
}
