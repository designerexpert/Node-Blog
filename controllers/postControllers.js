const postDb = require('../data/helpers/postDb.js');

const postControllers = {
    getPosts: (req, res) => {
        let { id } = req.params;
        if (id) {
            postDb.get(id)
                .then(posts => {
                    res.send(posts);
                })
                .catch((error) => {
                    res.status(500).json({ error: { message: 'There was an error getting a post with id: ' + id, error } });
                });
        } else {
            postDb.get()
                .then(posts => {
                    res.send(posts);
                })
                .catch((error) => {
                    res.status(500).json({ error: { message: 'There was an error getting a list of posts', error } });
                });
        }
    }
}

module.exports = postControllers;