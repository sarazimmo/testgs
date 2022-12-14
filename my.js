function testGS() {

    var url = "https://script.google.com/macros/s/AKfycbzzX1bTb9mwRRVpxHg_2uX6Ls4nAP08XnWlZ9uEZiJJgWeZei7iD0HDHneGR1uLKUIj/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}

document.getElementById("btn").addEventListener("click", testGS);