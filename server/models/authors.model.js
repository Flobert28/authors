const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    name: { 
        type: String,
        minlength: [3, 'Name must be at least 3 characters long'] 
    }
}, { timestamps: true });
module.exports = mongoose.model('Authors', AuthorsSchema);

