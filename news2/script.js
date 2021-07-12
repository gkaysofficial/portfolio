window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar-1");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-1")
    } else {
        navbar.classList.remove("sticky-1");
    }
}
const xhr = new XMLHttpRequest();
let city = "in"
let accordionnews = document.getElementById('accordionnews');

xhr.open('GET', ' https://newsapi.org/v2/top-headlines?country=in&apiKey=d8e22821b19f4f3d828dd4a7f974e7f2', true);

xhr.onload = function() {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function(element, index) {

            let news = `<h2 class="accordion-header" id="flush-headingOne${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne${index}" aria-expanded="false" aria-controls="flush-collapseOne${index}">
         <b>New ${index=1} :</b>${element["title"]}
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a></div>
        </div>
    </div>`;
            accordionnews.innerHTML += news;

        });
        accordionnews.innerHTML = accordionnews;

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