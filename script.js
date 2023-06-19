function weather(e) {
    let city = document.getElementById("city-name").value;
    document.getElementById("city-name").value = "";
    const API_KEY = 'f5ff7fb5af5699a48135187947f9037a';
    const KELVIN = 273;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;


    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("result").innerHTML = "Temperature at "+city+", "+data.sys.country+" is "+JSON.stringify(Math.floor(data.main.temp -KELVIN))+"'C"+"<br>"+"Weather Description: "+data.weather[0].description;

      })
      .catch(error => {
        document.getElementById("result").innerHTML = "Please check the city name"
      });


    e.preventDefault();
}