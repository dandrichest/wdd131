// Function to update the footer with the current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    
    document.getElementById('current-year').innerHTML = `&copy; ${currentYear} <span class="flower-symbol">✿</span>Daniel Oyeniyi<span class="flower-symbol">✿</span>Nigeria`;
    document.getElementById('lastModified').innerHTML = `Last Updated: ${lastModified}`;
}

updateFooter();


;


// Example weather data 
const weatherData = {
    temperature: '25°C',
    humidity: '60%',
    weatherCondition: 'Sunny'
};

// Display the weather data
document.getElementById('weather').innerHTML = `
    <p>Temperature: ${weatherData.temperature}</p>
    <p>Humidity: ${weatherData.humidity}</p>
    <p>Weather Condition: ${weatherData.weatherCondition}</p>
`;