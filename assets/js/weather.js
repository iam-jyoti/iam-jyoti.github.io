  // weather.js

  document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('city-input');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const conditionDisplay = document.getElementById('condition');
    const weatherIcon = document.getElementById('weather-icon');
    const humidityDisplay = document.getElementById('humidity');

    // Function to fetch weather data
    async function getWeatherData(city) {
      const apiKey = '50f385a97f706c491a5e3b4af8390273'; // Replace with your API key
      const appId = 'iam-jyoti'; // Replace with your API key

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          const temp = data.main.temp;
          const condition = data.weather[0].description;
          const icon = data.weather[0].icon;
          const humidity = data.main.humidity;

          cityNameDisplay.textContent = data.name;
          temperatureDisplay.textContent = temp + '°C';
          conditionDisplay.textContent = condition;
          humidityDisplay.textContent = humidity + '%';
          weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
        } else {
          console.log('Error fetching weather data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    // Event listener for the search input
    cityInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
          getWeatherData(city);
        }
      }
    });

  });