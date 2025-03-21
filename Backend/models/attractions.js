const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true, // Place name is required
    },
    areaName: {
        type: String, // Name of the area (optional)
    },
    taluka: {
        type: String, // Taluka name (optional)
    },
    district: {
        type: String, // District name (optional)
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
        ], // Type of attraction (optional)
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

module.exports = mongoose.model('attractions', attractionSchema);
