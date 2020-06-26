const API_URL = "https://api.ismaventuras.com/facts/get/random";


const promise = fetch(API_URL);
promise
    .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processedResponse) {
        console.log(processedResponse.image);
        if (processedResponse.image.length != 0) {
            if (processedResponse.image.length == 1)
            {
                const img = document.getElementById("fact-img");
                img.src = processedResponse.image;
                img.alt = processedResponse.title;
            }
        }

        // const h1 = document.createElement("h1");
        const h1 = document.getElementById('fact-title');
        h1.innerText = processedResponse.title;

        const p = document.getElementById("fact-body");
        p.innerText = processedResponse.fact_body;
    })