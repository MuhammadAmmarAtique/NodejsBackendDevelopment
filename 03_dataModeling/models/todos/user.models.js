import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({        
    // way 1
    // username: String,
    // email: String,
    // password: String

    // way 2 (professional & detailed)
    username:{ //calling object means using "superpower" of mongoose (data validation) matlb ya data must hona chahiyaa
        type: String,
        required : true, //matlb ya field hona hee chaiya, ya monogoose check kar gaa, beshak ham iska logic kahee na likhaay
        unique: true, //username must be unique
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps: true //moongoose will automatically add 2 timestamps (createdAt, updatedAt)
}
)

export const User = mongoose.model("User",UserSchema)