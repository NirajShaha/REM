import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIoX5KO1dP2XhqSUojRFHvq-ngssFMHIfKwxTubhmxCyMQLpIpRWBODmoaQ&s"
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;