const postDb = require('../data/helpers/postDb.js');
const tagDb = require('../data/helpers/tagDb.js');


const defaultRoute = (req, res) => {
    res.send({ text: `Tags is:${req.body.tags}` });
}

const userControllers = require('../controllers/userControllers.js');
const postControllers = require('../controllers/postControllers.js');
const tagControllers = require('../controllers/tagControllers.js');

const routes = (server) => {
    server.route('/').get(defaultRoute);

    server.route('/api/users').get(userControllers.getUsers);       /* << FINISHED */
    server.route('/api/users/:id').get(userControllers.getUsers);   /* << FINISHED */
    server.route('/api/users').post(defaultRoute);                  /* _ */
    server.route('/api/users/:id').delete(defaultRoute);            /* _ */

    server.route('/api/posts').get(postControllers.getPosts);       /* << FINISHED */
    server.route('/api/posts/:id').get(postControllers.getPosts);   /* << FINISHED */
    server.route('/api/posts').post(defaultRoute);                  /* _ */
    server.route('/api/posts/:id').delete(defaultRoute);            /* _ */

    server.route('/api/tags').get(tagControllers.getTags);          /* << FINISHED */
    server.route('/api/tags/:id').get(tagControllers.getTags);      /* << FINISHED */
    server.route('/api/tags').post(defaultRoute);                   /* _ */
    server.route('/api/tags/:id').delete(defaultRoute);             /* _ */

    server.route('/api/userposts/:id').get(defaultRoute);           /* _ */
    server.route('/api/posttags/:id').get(defaultRoute);            /* _ */

}
module.exports = { routes };