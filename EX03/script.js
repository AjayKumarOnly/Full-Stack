const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    const xmlDoc = this.responseXML;
    const books = xmlDoc.getElementsByTagName("book");

    let output = `
    <table border="1" cellspacing="0" cellpadding="8" class='tbl'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
    `;

    for (let i = 0; i < books.length; i++) {
        const id = books[i].getElementsByTagName("id")[0].textContent;
        const title = books[i].getElementsByTagName("title")[0].textContent;
        const author = books[i].getElementsByTagName("author")[0].textContent;
        const category = books[i].getElementsByTagName("category")[0].textContent;
        const price = books[i].getElementsByTagName("price")[0].textContent;
        const status = books[i].getElementsByTagName("status")[0].textContent;

        output += `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${author}</td>
                <td>${category}</td>
                <td>${price}</td>
                <td>${status}</td>
            </tr>
        `;
    }

    output += `
        </tbody>
    </table>
    `;

    document.getElementById("output").innerHTML = output;
};

xhttp.open("GET", "library.xml", true);
xhttp.send();

function add(){
    alert("Book Added Successfully...");
}
