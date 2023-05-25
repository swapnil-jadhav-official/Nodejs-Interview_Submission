import mongoose from "mongoose";

export const restaurantSchema = new mongoose.Schema({

    restaurant_name: {
        type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        vegOnly: {
            type: Boolean,
            required: true
        },
        cost: {
            type: String,
            enum: ['Low', 'Medium', 'High'],
            required: true
        },
        cusineTypes: {
            type: [String],
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        
        isOpen: {
            type: Boolean,
            required: true
        }
        
   
})

//const userModel = mongoose.model('todo', userSchema);

export default  mongoose.model.Restaurant || mongoose.model('Restaurant', restaurantSchema);