fetch("library.xml")
    .then(response => response.text())
    .then(xmlText => {

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // CHANGE: student → book
        const books = xmlDoc.getElementsByTagName("book");
        let output = "";

        for (let i = 0; i < books.length; i++) {
            const id = books[i].getElementsByTagName("id")[0].textContent;
            const title = books[i].getElementsByTagName("title")[0].textContent;
            const author = books[i].getElementsByTagName("author")[0].textContent;
            const category = books[i].getElementsByTagName("category")[0].textContent;
            const price = books[i].getElementsByTagName("price")[0].textContent;
            const status = books[i].getElementsByTagName("status")[0].textContent;

            output += `
                <p>
                    <b>ID:</b> ${id} <br>
                    <b>Title:</b> ${title} <br>
                    <b>Author:</b> ${author} <br>
                    <b>Category:</b> ${category} <br>
                    <b>Price:</b> ${price} <br>
                    <b>Status:</b> ${status}
                </p>
                <hr>
            `;
        }

        document.getElementById("output").innerHTML = output;
    })
    .catch(error => console.error("Error loading XML:", error));
