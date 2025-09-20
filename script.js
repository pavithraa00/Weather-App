const weatherData = [
    { condition: "Sunny", icon: "fa-sun", color: "#FFD93D" },
    { condition: "Cloudy", icon: "fa-cloud", color: "#B0B0B0" },
    { condition: "Rainy", icon: "fa-cloud-showers-heavy", color: "#4DA6FF" },
    { condition: "Stormy", icon: "fa-bolt", color: "#FF6B6B" },
    { condition: "Windy", icon: "fa-wind", color: "#A3E4D7" },
    { condition: "Foggy", icon: "fa-smog", color: "#C0C0C0" },
    { condition: "Snowy", icon: "fa-snowflake", color: "#FFFFFF" },
    { condition: "Drizzle", icon: "fa-cloud-rain", color: "#5DADE2" }
];

const temperatures = ["15°C", "18°C", "20°C", "22°C", "25°C", "28°C", "30°C", "32°C"];

document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    const weatherDisplay = document.getElementById("weatherDisplay");

    if(city === "") {
        weatherDisplay.innerHTML = ""; // no placeholder if empty
        return;
    }

    const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
    const randomTemp = temperatures[Math.floor(Math.random() * temperatures.length)];

    weatherDisplay.innerHTML = `
        <div class="weather-box">
            <i class="fas ${randomWeather.icon}" style="color: ${randomWeather.color}"></i>
            <h2>${city}</h2>
            <p>Condition: ${randomWeather.condition}</p>
            <p>Temperature: ${randomTemp}</p>
        </div>
    `;
});
