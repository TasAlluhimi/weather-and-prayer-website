console.log("test");

let container = document.getElementById("contai")

fetch('https://api.aladhan.com/v1/calendarByCity/2023/11?city=Riyadh&country=Saudi%20Arabia&method=4',{method:'GET'})
    .then(res=>res.json())
    .then(data =>{
        console.log(data);
        data.data.map((data)=>{
            container.insertAdjacentHTML('beforeend', `
            <div class="card border border-info shadow-0 mb-3" style="max-width: 18rem;">
            <div class="card-header">
            Gregorian date: ${data.date.gregorian.date} <br>
            Hijri date: ${data.date.hijri.date} <br>
            ${data.date.gregorian.weekday.en} 
            </div>
            <div class="card-body">
                <h5 class="card-title">Prayer Times:</h5>
                <p class="card-text">
                Fajr: ${data.timings.Fajr}<br>
                Dhuhr: ${data.timings.Dhuhr}<br>
                Asr: ${data.timings.Asr}<br>
                Maghrib: ${data.timings.Maghrib}<br>
                Isha: ${data.timings.Isha}
                </p>
            </div>
            </div>`)
        })
    })
    .catch(err => console.error('error ', err))