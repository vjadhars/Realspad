const mongoose = require("mongoose");

const schema = mongoose.Schema({
    walletAddress: {
        type: String,
        required: true,
    },
    points: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telegram: {
        type: String,
        required: true
    },
    refAddress: {
        type: String,
    },
    refPoint: {
        type: String,
    }
})

const RealspadPoints = mongoose.model("RealspadPoints", schema);
module.exports = RealspadPoints;