const AuthorsController = require('../controllers/authors.controller');
module.exports = (app) => {
    app.post('/api/person', AuthorsController.createAuthors);
    app.get('/api/person', AuthorsController.getAllAuthors); 
    app.get('/api/person/:id', AuthorsController.getAuthors);
    app.patch('/api/person/:id', AuthorsController.updateAuthors);
    app.delete('/api/person/:id', AuthorsController.deleteAuthors);
}

