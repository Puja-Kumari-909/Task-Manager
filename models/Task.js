const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: [true, 'must provide a name'],
        maxlength: [20, 'name should be less than 20 characters'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)