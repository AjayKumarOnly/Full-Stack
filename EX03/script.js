const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    const xmlDoc = this.responseXML;

    // ✅ Correct: get all book elements
    const books = xmlDoc.getElementsByTagName("book");
    let output = "";

    for (let i = 0; i < books.length; i++) {
        const title = books[i].getElementsByTagName("title")[0].textContent;
        const author = books[i].getElementsByTagName("author")[0].textContent;
        const price = books[i].getElementsByTagName("price")[0].textContent;
        const status = books[i].getElementsByTagName("status")[0].textContent;

        output += `
            <p>
                <b>Title:</b> ${title}<br>
                <b>Author:</b> ${author}<br>
                <b>Price:</b> ${price}<br>
                <b>Status:</b> ${status}
            </p>
            <hr>
        `;
    }

    document.getElementById("output").innerHTML = output;
};

xhttp.open("GET", "library.xml", true);
xhttp.send();
