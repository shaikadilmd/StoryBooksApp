const mongoose = require('mongoose');
const storySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'public'
    },
    allowComments: {
        type: Boolean,
        default: true
    },
    comments: [{
        commentBody: {
            type: String,
            required: true
        },
        commentDate: {
            type: Date,
            default: Date.now
        },
        commentUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'googleUsers'
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'googleUsers'
    },
    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('stories', storySchema);