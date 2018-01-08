module.exports = app => {
    const mongoose = app.mongoose;
    const UserSchema = new mongoose.UserSchema({
        username: { type: String },
        password: { type: String }
    })

    return mongoose.model('User', UserSchema)
}