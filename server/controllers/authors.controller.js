const Authors = require('../models/authors.model');
module.exports.createAuthors = (request, response) => {
    Authors.create(request.body)
        .then(authors => response.json(authors))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors = (request, response) => {
  Authors.find({})
      .then(authors => {
          console.log(authors);
          response.json(authors);
      })
      .catch(err => {
          console.log(err)
          response.json(err)
      })
}

module.exports.getAuthors = (request, response) => {
  Authors.findOne({_id:request.params.id})
      .then(authors => response.json(authors))
      .catch(err => response.json(err));
}

module.exports.updateAuthors = (request, response) => {
    Authors.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthors => response.json(updatedAuthors))
        .catch(err => response.json(err))
}

module.exports.deleteAuthors = (request, response) => {
    Authors.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}





