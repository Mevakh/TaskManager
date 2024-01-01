const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Personele isim giriniz']
    },
    title:String,
    imgUrl:String,
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person