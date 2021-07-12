let city = "in"
let accordionnew = document.getElementById('accordionFlushExample');
const xhr = new XMLHttpRequest();
xhr.open('GET', ' https://newsapi.org/v2/top-headlines?country=in&apiKey=d8e22821b19f4f3d828dd4a7f974e7f2', true);

xhr.onload = function() {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function(element, index) {

            let news = ` <div class="accordion accordion-flush" id="accordionFlushExample${index}">
            <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
         ${element["title"]} <b>News Fetched by :-${element["author"]}</b>
        </button>
        </h2>
        <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${element["description"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
        </div>
    </div>`;
            accordionnews += news;

        });
        accordionFlushExample.innerHTML = accordionnews;

    } else {
        console.log("Some Error Eccored");
    }

}
xhr.send()
    // Weather api
let weather = {
    apiKey: "67e000be8e7388c4170e8358de579741",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apiKey
            )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Chandigarh");