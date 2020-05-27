const db = require('./database/dbConfig')

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    getCannabisList,
    get_specific_type,
    addLiked,
    getLiked,
    addFeedBackBySpecificType,
    getAllTreated,
    deleteUser,
    editUser
}

function addUser(user) {
    return db('users')
        .insert(user)
}

function getAllUsers() {
    return db('users')
}

function getUserById(email) {
    return db('users')
        .where({email})
        .first()
}

function getCannabisList() {
        return db('cannabis_list')
}

function get_specific_type({Type}) { // dereference
    return db('cannabis_list')
        .where({Type})
        .select('Type', 'Strain', 'Flavor')
        .limit(20)

}

function addLiked(user_id, strain) {
    return db('liked')
        .insert({user_id, can_strain: strain})
}

function getLiked(user_id) {
    return db('liked')
        .where({user_id})
}

function addFeedBackBySpecificType(liked_id, what_treated_name) {
    return db('treated')
        .insert({liked_id, what_treated_name})
}

function getAllTreated() {
    return db('treated')
}

function deleteUser (id) {
    return db('users')
        .where({id})
        .delete()
}

function editUser(id, {name}) {
    return db('users')
        .where({id})
        .update({name})
}