var mongoose = require('mongoose');

var commentScheme = new mongoose.Schema(
    {
        author : String,
        comment : String,
        commentedOn : Date,
        likes : Number,        
    }
)

// var timeScheme = new mongoose.Schema(
//     {
//         date : {
//             required : true,
//             type : String,
//         },
//         time : {
//             required : true,
//             type : String,
//         }
//     }
// )

var blogSchema = new mongoose.Schema(
    {
        title : {
            required : true,
            type : String
        },
        subTitle :  {
            required : true,
            type : String
        },
        description :  {
            required : true,
            type : String
        },
        publishedOn : {
            required: true,
            type : {
                date : String,
                time : String
            }
        },
        imageSrc : String,
        comments : [commentScheme],
        name : {
            required: true,
            type : String
        }
    }
)

module.exports = mongoose.model('Blog', blogSchema, 'blogx');