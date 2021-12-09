console.log('Welcome to Prathamesh Tak');

// 360eaf0d276742318e5ad7737704d8db

// let source = 'bbc-news';
let apiKey = '360eaf0d276742318e5ad7737704d8db'

// Grab the news container
let NewsAccordion = document.getElementById('NewsAccordion'); //Accordion parent 

// Create an Ajax get request 
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
// https://newsapi.org/v2/top-headlines?country=in&apiKey=360eaf0d276742318e5ad7737704d8db


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);

        let newsHtml = '';
        articles.forEach(function (element) {

            //     let news = `<div class="accordion-item">
            //                     <div class="news_Pratham">
            //                         <img src='${element['urlToImage']}' alt='image'/>
            //                         <h2 class="accordion-header" id="heading${index}">
            //                             <button class="accordion-button" type="button" data-bs-toggle="collapse"
            //                                 data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            //                                <b>Breaking News : ${index+1} </b> ${element['title']}
            //                             </button>
            //                         </h2>
            //                     </div>

            //                     <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
            //                         data-bs-parent="#NewsAccordion">
            //                         <div class="accordion-body">
            //                             ${element['content']} <a href='${element['url']}' target="_blank">Read More ></a>
            //                         </div>
            //                     </div>
            //                 </div>`;
            //     newsHtml += news;

            let news = `<div class="col-md-3">
                            <div class="card news_card">
                                <img src='${element['urlToImage']}' class="card-img-top"  alt='image'/>
                                <div class="card-body">
                                    <h5 class="card-title news_title">${element['title']}</h5>
                                    <p class="card-text news_contet">${element['content']}</p>
                                    <a href="${element['url']}" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>`
            newsHtml += news;
        });
        NewsAccordion.innerHTML = newsHtml;

    } else {
        console.log('Some error occured');
    }
}

xhr.send();


