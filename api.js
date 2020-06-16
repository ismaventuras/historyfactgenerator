const API_URL = "http://api.ismaventuras.com/facts/get/random";

const contenedor = document.querySelector(".container");

const promise = fetch(API_URL);
promise
    .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        console.log(processedResponse.image)
        if(processedResponse.image.length != 0 ){
            const img = document.createElement("img");
            img.src = processedResponse.image;
            img.alt = processedResponse.title;
            contenedor.appendChild(img);
        }

        const h1 = document.createElement("h1");
        h1.innerText = processedResponse.title;

        const p = document.createElement("p");
        p.innerText = processedResponse.fact_body;

        contenedor.appendChild(h1);
        contenedor.appendChild(p);
  

    })