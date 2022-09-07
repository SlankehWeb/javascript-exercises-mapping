const apiData = [];

const getApiData = () => {

    const apiEndpoint = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-07&sortBy=publishedAt&apiKey=f83e5056cc7749409aa864c1d2438641';

    fetch(apiEndpoint)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) => {
        // console.log(data.items);
        apiData.push(data.articles);
    })
    .catch((error)  => {
        console.error(error);
    })
    .finally(() => {
        renderContent();
    })
};

const renderContent = () => {
     console.log(apiData);

    apiData[0].map((news , i) => createElements(news));

};

const createElements = (data) => {
    document.getElementById("mother").innerHTML += `
    
    <figure class="card" >
    <h2> ${data.title} </h2>
    <img src=${data.urlToImage} alt=${data.title} >
    <article class="container" >
    <p> ${data.author} </p>
    <p> ${data.description} </p>
    <p> ${data.publishedAt} </p>
    <a href=${data.url} target="_blank" > læs mere> </a>
    </article>
    </figure>
    
    `
}

getApiData();