const { learnWithUs } = require('../model/learnWithUsSchema');


async function getAll() {
    try {
        return await learnWithUs.find();
    } catch (error) {
        return {};
    }
    
}



module.exports = {
    getAll
}