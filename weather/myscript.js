let weather = {
    "apiKey": "67e000be8e7388c4170e8358de579741",
    fetchWeater: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q={chandigarh}&appid={67e000be8e7388c4170e8358de579741}"
        ).then((Response) => Response.json()).then((data) => console.log(data));
    },

};