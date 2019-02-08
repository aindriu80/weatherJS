// Init storage
const storage = new Storage();

//Get Stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
// const ui = new UI();
// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("city").value;

  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

// Chage Weather
weather.changeLocation(city, state);
// Set Location in LS
storage.setLocationData(city, state);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      // ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
