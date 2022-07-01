const elForm=document.querySelector(".form");
const elMainBody=document.querySelector(".main__body");
const elInput=document.querySelector(".input");

const getData=function(data){
    const html=`
    <div class="main__body">
    <form class="form">
    <input class="input" type="text" placeholder="Search...">
    <i class="fa-solid fa-magnifying-glass"></i>
   </form>
     <h1 class="main--title">"${data.name}"</h1>
     <div class="main--span"><i class="fa-solid fa-temperature-half"></i>${data.main.temp}°C</div>
     <div class="main__speed">Speed: ${data.wind.speed}</div>
     <img class="main__img" src="./imgs/cloudy.svg" alt="sfef">
     </div>
    `;
    elMainBody.innerHTML=null;
    elMainBody.insertAdjacentHTML('beforeend',html)
}
// getData(Germany)


const getCountry=function(location){
   
    const request=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`).then(response=>response.json()).then((data)=>getData(data));
    return request;
}

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var inputValue=elInput.value;
    getCountry(inputValue);
})


