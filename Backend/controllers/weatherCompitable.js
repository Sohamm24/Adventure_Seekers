const isWeatherCompitable = async (req, res) => {
    let currentTemperature = 30;
    let averageTemperature = 32;

    if (currentTemperature > averageTemperature) {
        return res.status(200).json({
            message: "Not advisable to visit the place now"
        });
    }

    return res.status(200).json({
        message: "Weather is suitable for visiting"
    });
};

module.exports = isWeatherCompitable;

