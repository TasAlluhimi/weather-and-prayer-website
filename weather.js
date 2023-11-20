console.log("test");

let container = document.getElementById("cont")

let search = document.getElementById("search")
let city = document.getElementById("city")

search.addEventListener('click', ()=>{
    city = city.value 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54b310fc60ee6a10ab5db90527e47798`)
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        
        container.insertAdjacentHTML('beforeend', `
        <div class="card mb-3 p-5" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img
            src="w-animate.svg"
            width="2000em"
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
        />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">City: ${data.name}</h5>
            <p class="card-text">
            The tempreature: ${data.main.temp}<br>
            The humidity: ${data.main.humidity}<br>
            The lat: ${data.coord.lat}<br>
            The lon: ${data.coord.lon}
            </p>
        </div>
        </div>
    </div>
    </div>
        `)
       
    })
    .catch(err => console.error('error ', err))


})
fetch('https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=54b310fc60ee6a10ab5db90527e47798')
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        
        container.insertAdjacentHTML('beforeend', `
        <div class="card mb-3 p-5" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
        <img
            src="w-animate.svg"
            width="2000em"
            alt="Trendy Pants and Shoes"
            class="img-fluid rounded-start"
        />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">City: ${data.name}</h5>
            <p class="card-text">
            The tempreature: ${data.main.temp}<br>
            The humidity: ${data.main.humidity}<br>
            The lat: ${data.coord.lat}<br>
            The lon: ${data.coord.lon}
            </p>
        </div>
        </div>
    </div>
    </div>
        `)
       
    })
    .catch(err => console.error('error ', err))



