let place=document.querySelector('.location');
let button=document.querySelector('.button');
let temprature=document.querySelector('.temprature');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=metric&appid=2e0bb4ef8659a442c7196c27a76672ce`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('Invalid Location'));
})

const displayData=(weather)=>{
    temprature.innerText=`${weather.main.temp}°C`
}