const apiData = [];

const getApiData = () => {

    const apiEndpoint = 'https://api.mediehuset.net/sdg/goals';

    fetch(apiEndpoint)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) => {
        // console.log(data.items);
        apiData.push(data.items);
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

    apiData[0].map((goal , i) => createElements(goal));

};

const createElements = (data) => {
    document.getElementById("mother").innerHTML += `
    
    <figure class="card" >
    <img src=${data.image} alt=${data.title} >
    <article class="container" >
    <h4> ${data.title} </h4>
    </article>
    </figure>
    
    `
}

getApiData();