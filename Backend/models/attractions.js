const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true, 
        index: true
    },
    areaName: {
        type: String, 
        index: true
    },
    taluka: {
        type: String,
        index: true
    },
    district: {
        type: String, 
        index: true
    },
    type: {
        type: String,
        enum: [
            'Trek',
            'Fort',
            'Beach',
            'Museum',
            'Old Architecture',
            'Religious Place',
            'Safari',
            'Jungle',
            'Waterfall'
        ], 
        index:true
    },
    description: {
        type: String, // Description of the attraction (optional)
    },
    images: [{
        type: String, // Array of image URLs (optional)
    }],
    localGuide: {
        type: String, // Name or contact info of a local guide (optional)
    },
    nearbyEateries: [{
        type: String, // Array of nearby eateries (optional)
    }],
    nearbyHotels: [{
        type: String, // Array of nearby hotels (optional)
    }],
    openingTime: {
        type: String, // Opening time (optional)
    },
    closingTime: {
        type: String, // Closing time (optional)
    },
    averageExpense: {
        type: Number, // Average expense in local currency (optional)
    },
    averageWeather: {
        type: Number, // Optional: General weather conditions (e.g., "Cool and Misty", "Hot and Humid")
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

attractionSchema.index({ district: 1, taluka: 1 });
attractionSchema.index({ type: 1, areaName: 1 });
attractionSchema.index({ placeName: "text", description: "text" });

module.exports = mongoose.model('attractions', attractionSchema);
