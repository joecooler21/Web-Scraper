const button = document.getElementById("scrape");
button.addEventListener("click", (e) => {
    fetch('/scrape')
    .then(response => {
        return response.json();
    })
    .then(data => console.log(data));
});