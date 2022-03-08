const mongoose = require('mongoose')
const schema = mongoose.Schema;


const userSchema = new schema ({

    username: {
        type:String,
        default:''
    },

    email: {
        type:String
    },
    password:{
        type:String
    },
    created_ts:{
        type: Date
    },
    online:{
        type: String
    }


})

module.exports = userSchema
