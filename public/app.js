

function save(e) {
    let article = {};

    article.text = e.getAttribute("data-text");
    article.link = e.getAttribute("data-link");

    fetch('/scrape', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


}