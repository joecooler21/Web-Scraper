

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

function comment(e) {

    let comment = {};
    comment.text = e.previousElementSibling.value;
    comment.id = e.getAttribute('data-id');

    fetch('/saved', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        location.reload();

}