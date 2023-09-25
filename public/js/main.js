const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_Name = document.getElementById("city_Name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp_real_value");
const datahide = document.querySelector(".middle_layer");
const day = document.getElementById("day");
const date = document.getElementById("today_data")

const getInfo = async(event) =>{
    event.preventDefault();
    // alert("lol");
    console.log("lol");
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_Name.innerHTML = `plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=99d79496300d11d474268021eb6a1ed8`;
            const response = await fetch(url); 
            const data = await response.json();
            const arrData = [data];
            // console.log(arrData);
            city_Name.innerHTML = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText = Math.round(arrData[0].main.temp);
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Sunny") {
                temp_status.innerHTML = "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rainy") {
                temp_status.innerHTML = "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas  fa-cloud-sun' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');

            let weekday = [
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
               ];

            let lol = new Date();
            let dayss = weekday[lol.getDay()];
            day.innerText = dayss;
            date.innerHTML = lol.getDate(); 
            

        }catch{
            city_Name.innerHTML = `plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    } 
}

submitBtn.addEventListener("click",getInfo);  