const tagDb = require('../data/helpers/tagDb.js');

const tagControllers = {
    getTags: (req, res) => {
        let { id } = req.params;
        if (id) {
            tagDb.get(id)
                .then(tags => {
                    res.send(tags);
                })
                .catch((error) => {
                    res.status(500).json({ error: { message: 'There was an error getting a tag with id: ' + id, error } });
                });
        } else {
            tagDb.get()
                .then(tags => {
                    res.send(tags);
                })
                .catch((error) => {
                    res.status(500).json({ error: { message: 'There was an error getting a list of tags', error } });
                });
        }
    }
}

module.exports = tagControllers;