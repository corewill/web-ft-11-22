const searchButton = document.querySelector(".subbutton");

const getWeather = async () => {
  const weatherInput = document.querySelector(".zipinput").value;
  console.log(weatherInput);
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=3521d5dead42dfdadedff478e1b3f5b9`
  );
  const json = await weatherData.json();

  
  console.log(json)
  const cityName = document.querySelector(".cname");
  const tempreader = document.querySelector(".wetr");
  
tempreader.innerText = json.main.temp
cityName.innerText = json.name
};

searchButton.addEventListener("click", getWeather);