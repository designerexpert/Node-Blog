const userDb = require('../data/helpers/userDb.js');

const userControllers = {
    getUsers: (req, res) => {
        let { id } = req.params;
        if (id) {
            userDb.get(id)
                .then(users => {
                    res.send(users);
                })
                .catch((error) => {
                    res.status(500).json({ error: { message: 'There was an error getting a user with id: ' + id, error } });
                });
        } else {
            userDb.get()
                .then(users => {
                    res.send(users);
                })
                .catch((error) => {
                    res.status(500).json({ error: { message: 'There was an error getting a list of users', error } });
                });
        }
    }
}

module.exports = userControllers;