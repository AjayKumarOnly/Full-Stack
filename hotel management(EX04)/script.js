
fetch('data.json')
    .then(response => response.json())
    .then(data=>{
        const table = document.getElementById('hotelTable');
       data.hotels.forEach(element => {
      

            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${element.hotelId}</td>
            <td>${element.name}</td>
            <td>${element.location.address} , ${element.location.city},${element.location.country}</td>
            <td>${element.contact.phone}, ${element.contact.email}</td>
            <td>${element.rating}</td>
            `;
            table.appendChild(row);
        });
    })
    .catch(err=>console.log("Error : .err"));



const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const bookingData = {
            id: Date.now(), 
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            hotel: document.getElementById("hotel").value,
            checkIn: document.getElementById("checkin").value,
            checkOut: document.getElementById("checkout").value,
            guests: document.getElementById("guests").value
        };

       
        let bookings = JSON.parse(sessionStorage.getItem("bookings")) || [];

    
        bookings.push(bookingData);

        sessionStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Booking added successfully!");

        bookingForm.reset();
    });
}


const bookingTable = document.getElementById("bookingTable");

if (bookingTable) {
   
    let bookings = JSON.parse(sessionStorage.getItem("bookings")) || [];

    function renderTable() {
        bookingTable.innerHTML = "";

        bookings.forEach((booking) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.name}</td>
                <td>${booking.phone}</td>
                <td>${booking.email}</td>
                <td>${booking.hotel}</td>
                <td>${booking.checkIn}</td>
                <td>${booking.checkOut}</td>
                <td>${booking.guests}</td>
                <td><button onclick="deleteBooking(${booking.id})">Delete</button></td>
            `;
            bookingTable.appendChild(row);
        });
    }

    renderTable();

    // Function to delete booking
    window.deleteBooking = function(id) {
        bookings = bookings.filter(b => b.id !== id);
        sessionStorage.setItem("bookings", JSON.stringify(bookings));
        renderTable();
    };
}



