require("dotenv").config();

// Get coordinates using IP-based geolocation (Node.js compatible)
const getLocation = async () => {
  const ipResponse = await fetch("https://ipapi.co/json/");
  const ipData = await ipResponse.json();
  console.log(ipData)
  return { 
    latitude: ipData.latitude, 
    longitude: ipData.longitude 
  };
};

const getWeatherData = async () => {
  try {
    const { latitude, longitude } = await getLocation();
    console.log(`Location: Lat=${latitude}, Lon=${longitude}`);

    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=18.5211&lon=73.8502&appid=96832d9cfb4f528b7ee333baee47cd88&units=metric"
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
    return response.json();
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Re-throw for caller handling
  }
};

// Proper usage
getWeatherData()
  .then(data => console.log("temperature:", data.main.temp))
  .catch(err => console.error("Failed:", err));
