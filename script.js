// GHORCAST - Main JavaScript

// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".navigation");

if (menuButton) {
    menuButton.addEventListener("click", function () {

        if (navigation.style.display === "flex") {
            navigation.style.display = "";
        } else {
            navigation.style.display = "flex";
            navigation.style.flexDirection = "column";
            navigation.style.position = "absolute";
            navigation.style.top = "65px";
            navigation.style.left = "0";
            navigation.style.right = "0";
            navigation.style.background = "#ffffff";
            navigation.style.padding = "20px";
            navigation.style.borderBottom = "1px solid #eeeeee";
        }

    });
}


// ================= SEARCH =================

function searchWebsite() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {

        alert("Please enter a hotel, destination or article to search.");

        searchInput.focus();

        return;
    }

    alert(
        "GhorCast search: " +
        searchTerm +
        "\n\nThe full search system will be added later."
    );
}


// ================= HOTEL DETAILS =================

const hotelDetails = [

    {
        name: "Luxury Grand Hotel",
        location: "Dubai, UAE",
        rating: "4.8 / 5",
        price: "From $120/night",
        description:
            "A premium hotel listing featured on GhorCast. Hotel facilities, rooms, availability and booking information will be added here."
    },

    {
        name: "Royal View Hotel",
        location: "Makkah, Saudi Arabia",
        rating: "4.7 / 5",
        price: "From $95/night",
        description:
            "A popular Makkah hotel listing featured on GhorCast. Hotel facilities, rooms, availability and booking information will be added here."
    },

    {
        name: "Ocean Paradise Resort",
        location: "Cox's Bazar, Bangladesh",
        rating: "4.6 / 5",
        price: "From $70/night",
        description:
            "A beach resort listing featured on GhorCast. Rooms, facilities, availability and booking information will be added here."
    }

];


// ================= OPEN HOTEL =================

function openHotel(hotel) {

    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.75)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "9999";
    modal.style.padding = "20px";
    modal.style.boxSizing = "border-box";


    const box = document.createElement("div");

    box.style.background = "white";
    box.style.maxWidth = "550px";
    box.style.width = "100%";
    box.style.borderRadius = "18px";
    box.style.padding = "35px";
    box.style.boxSizing = "border-box";
    box.style.position = "relative";
    box.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";


    box.innerHTML = `

        <button id="closeHotel"
        style="
        position:absolute;
        right:15px;
        top:12px;
        width:40px;
        height:40px;
        border:0;
        border-radius:50%;
        background:#eeeeee;
        font-size:25px;
        cursor:pointer;
        ">
        ×
        </button>


        <p style="
        color:#b38a3c;
        font-weight:bold;
        letter-spacing:1px;
        ">
        GHORCAST HOTEL
        </p>


        <h2 style="
        font-size:30px;
        margin-bottom:10px;
        color:#17212b;
        ">
        ${hotel.name}
        </h2>


        <p style="color:#666;">
        📍 ${hotel.location}
        </p>


        <p style="
        color:#b38a3c;
        font-size:18px;
        ">
        ★ ${hotel.rating}
        </p>


        <p style="
        color:#555;
        line-height:1.7;
        ">
        ${hotel.description}
        </p>


        <h3 style="color:#17212b;">
        ${hotel.price}
        </h3>


        <button style="
        width:100%;
        padding:15px;
        border:0;
        border-radius:8px;
        background:#17212b;
        color:white;
        font-weight:bold;
        font-size:15px;
        ">
        Booking & Availability — Coming Soon
        </button>

    `;


    modal.appendChild(box);

    document.body.appendChild(modal);


    document.getElementById("closeHotel").onclick = function () {
        modal.remove();
    };


    modal.onclick = function (event) {

        if (event.target === modal) {
            modal.remove();
        }

    };

}


// ================= HOTEL BUTTONS =================

const hotelButtons =
    document.querySelectorAll(".hotel-card .card-footer button");


hotelButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        if (hotelDetails[index]) {

            openHotel(hotelDetails[index]);

        }

    });

});


// ================= NEWSLETTER =================

const newsletterForm =
    document.querySelector(".newsletter-form");


if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const emailInput =
            newsletterForm.querySelector("input");


        const email =
            emailInput.value.trim();


        if (email === "") {

            alert("Please enter your email address.");

            return;

        }


        alert(
            "Thank you for subscribing to GhorCast!"
        );


        emailInput.value = "";

    });

}


// ================= CURRENT YEAR =================

const footerYear =
    document.querySelector(".footer-bottom p");


if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " GhorCast. All rights reserved.";

}
