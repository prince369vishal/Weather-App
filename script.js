const apikey = "6d605377cc34dd72b3d0bfbed8f0fcff";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox =document.querySelector(".search input")
const btn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon");

async function weather(city){

  const reponse = await fetch(apiurl + city + `&appid=${apikey}` + `&units=metric`)

  if(reponse.status ==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none"
  }else{
    var data = await reponse.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".WindSpeed").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png"
  }

  else if(data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png"
  }

  else if(data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png"
  }

  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src="images/drizzle.png"
  }

  else if(data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png"
  }

  document.querySelector(".weather").style.display="block"
  document.querySelector(".error").style.display="none"
  }
  
}

btn.addEventListener("click",()=> {
  weather(searchBox.value);
})


