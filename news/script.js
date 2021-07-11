const xhr = new XMLHttpRequest();
let city = "in"
let con = document.getElementById('con');

xhr.open('GET', ' https://newsapi.org/v2/top-headlines?country=in&apiKey=d8e22821b19f4f3d828dd4a7f974e7f2', true);

xhr.onload = function() {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function(element, index) {
            // let news = document.querySelector(".title").innerText = "Breaking News :-  " +
            //     element["title"] + index + 1;
            // document.querySelector(".description").innerText = element["description"];


            let news = `<div class="card">
            <div class="title">

                <h2>${element["title"]}</h2>
            </div>
            <div class="description">${element["description"]}
            </div>
            <div class="author"><h3${element["author"]}></h3></div>
            <button><a href="${element['url']}" target="blank">Read More</a></button>
            

        </div>`;
            con.innerHTML += news;

        });


    } else {
        console.log("Some Error Eccored");
    }

}
xhr.send()