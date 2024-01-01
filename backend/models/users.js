const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    email:{
        type: String,
        required:[true,'Lütfen E-mail Giriniz']
    },
    password:{
        type:String,
        required: [true, 'Lütfen parola giriniz']
    }
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users