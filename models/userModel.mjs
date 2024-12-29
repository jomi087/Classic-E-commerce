import mongoose from "mongoose";
console.log(mongoose)


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  
    },
    mobile: {
        type: String,
        default : null
    },
    googleId: {
        type: String,
        unique : true,
    },
    password: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    // cart: [{    //for single cart  rel 1 to 1 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Cart' 
    // }],
    // wallet: [{     //for single wallet  rel 1 to 1 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Wallet' 
    // }],  
    // wishlist: [{     //for single wishlist  rel 1 to 1 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Wishlist' 
    // }],
    // orderHistory: [{     //for single orderHistory  rel 1 to 1 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Order' 
    // }],
    // referalCode : {
    //     type: String
    // },
    // redeemed : {
    //     type: Boolean,
    // },
    // redeemeedUser : [{    
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User' 
    // }],
    // searchHistory : [{   
    //     category : { 
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'Category' 
    //     },
    //     brand : { 
    //         type: String,
    //     },
    //     SerachOn : {
    //         type : Date,
    //         default : Date.now
    //     }
    // }],
    
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields to your documents
});


export default mongoose.model('User', userSchema)