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

        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",

        description:
            "A premium hotel listing featured on GhorCast. Hotel facilities, rooms, availability and booking information will be added here.",

        facilities: [
            "🛏️ Comfortable Rooms",
            "📶 Free Wi-Fi",
            "🍽️ Restaurant",
            "🏊 Swimming Pool"
        ]
    },


    {
        name: "Royal View Hotel",
        location: "Makkah, Saudi Arabia",
        rating: "4.7 / 5",
        price: "From $95/night",

        image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",

        description:
            "A popular Makkah hotel listing featured on GhorCast. Hotel facilities, rooms, availability and booking information will be added here.",

        facilities: [
            "🛏️ Comfortable Rooms",
            "📶 Free Wi-Fi",
            "🍽️ Restaurant",
            "🕌 Near Haram"
        ]
    },


    {
        name: "Ocean Paradise Resort",
        location: "Cox's Bazar, Bangladesh",
        rating: "4.6 / 5",
        price: "From $70/night",

        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",

        description:
            "A beach resort listing featured on GhorCast. Rooms, facilities, availability and booking information will be added here.",

        facilities: [
            "🛏️ Comfortable Rooms",
            "📶 Free Wi-Fi",
            "🍽️ Restaurant",
            "🏖️ Beach Access"
        ]
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
    modal.style.background = "rgba(0,0,0,0.78)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "9999";
    modal.style.padding = "20px";
    modal.style.boxSizing = "border-box";
    modal.style.overflowY = "auto";


    // ================= HOTEL BOX =================

    const box = document.createElement("div");

    box.style.background = "#ffffff";
    box.style.maxWidth = "620px";
    box.style.width = "100%";
    box.style.borderRadius = "20px";
    box.style.overflow = "hidden";
    box.style.position = "relative";
    box.style.boxShadow = "0 25px 70px rgba(0,0,0,0.4)";


    // ================= FACILITIES =================

    let facilitiesHTML = "";

    hotel.facilities.forEach(function (facility) {

        facilitiesHTML += `
            <div style="
                padding:12px;
                background:#f6f6f6;
                border-radius:8px;
                color:#444;
                font-size:14px;
            ">
                ${facility}
            </div>
        `;

    });


    // ================= HOTEL CONTENT =================

    box.innerHTML = `

        <!-- HOTEL IMAGE -->

        <div style="
            width:100%;
            height:250px;
            background-image:url('${hotel.image}');
            background-size:cover;
            background-position:center;
        "></div>


        <!-- CLOSE BUTTON -->

        <button id="closeHotel"
        style="
            position:absolute;
            right:18px;
            top:18px;
            width:42px;
            height:42px;
            border:0;
            border-radius:50%;
            background:#ffffff;
            color:#17212b;
            font-size:26px;
            cursor:pointer;
            box-shadow:0 3px 12px rgba(0,0,0,0.25);
        ">
            ×
        </button>


        <!-- HOTEL INFORMATION -->

        <div style="padding:30px;">


            <p style="
                color:#b38a3c;
                font-weight:bold;
                letter-spacing:1.5px;
                font-size:13px;
                margin:0 0 8px;
            ">
                GHORCAST HOTEL
            </p>


            <h2 style="
                font-size:30px;
                margin:0 0 8px;
                color:#17212b;
            ">
                ${hotel.name}
            </h2>


            <p style="
                color:#666;
                margin:0 0 10px;
                font-size:15px;
            ">
                📍 ${hotel.location}
            </p>


            <p style="
                color:#b38a3c;
                font-size:18px;
                font-weight:bold;
                margin:0 0 20px;
            ">
                ★ ${hotel.rating}
            </p>


            <p style="
                color:#555;
                line-height:1.7;
                margin:0 0 22px;
            ">
                ${hotel.description}
            </p>


            <!-- FACILITIES -->

            <h3 style="
                color:#17212b;
                margin:0 0 12px;
                font-size:20px;
            ">
                Hotel Facilities
            </h3>


            <div style="
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:10px;
                margin-bottom:25px;
            ">

                ${facilitiesHTML}

            </div>


            <!-- PRICE -->

            <div style="
                padding:18px;
                background:#f8f8f8;
                border-radius:10px;
                margin-bottom:18px;
            ">

                <div style="
                    color:#777;
                    font-size:13px;
                    margin-bottom:4px;
                ">
                    Starting from
                </div>


                <div style="
                    color:#17212b;
                    font-size:24px;
                    font-weight:bold;
                ">
                    ${hotel.price}
                </div>

            </div>


            <!-- AVAILABILITY BUTTON -->

            <button id="availabilityButton"
            style="
                width:100%;
                padding:16px;
                border:0;
                border-radius:9px;
                background:#17212b;
                color:#ffffff;
                font-weight:bold;
                font-size:15px;
                cursor:pointer;
            ">
                Check Availability
            </button>


        </div>

    `;


    // ================= ADD MODAL =================

    modal.appendChild(box);

    document.body.appendChild(modal);


    // ================= CLOSE BUTTON =================

    const closeButton =
        box.querySelector("#closeHotel");


    closeButton.onclick = function () {

        modal.remove();

    };


    // ================= CLOSE OUTSIDE =================

    modal.onclick = function (event) {

        if (event.target === modal) {

            modal.remove();

        }

    };


    // ================= AVAILABILITY =================

    const availabilityButton =
        box.querySelector("#availabilityButton");


    availabilityButton.onclick = function () {

        alert(
            "Hotel availability and online booking for " +
            hotel.name +
            " will be available on GhorCast soon."
        );

    };

}


// ================= HOTEL BUTTONS =================

const hotelButtons =
    document.querySelectorAll(
        ".hotel-card .card-footer button"
    );


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

    newsletterForm.addEventListener(
        "submit",
        function (event) {

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

        }
    );

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
// ================= HOTEL DEALS =================

const dealsButton =
    document.querySelector(".deals-section .primary-button");


if (dealsButton) {

    dealsButton.addEventListener("click", function () {

        const dealsModal = document.createElement("div");

        dealsModal.style.position = "fixed";
        dealsModal.style.left = "0";
        dealsModal.style.top = "0";
        dealsModal.style.width = "100%";
        dealsModal.style.height = "100%";
        dealsModal.style.background = "rgba(0,0,0,0.78)";
        dealsModal.style.display = "flex";
        dealsModal.style.alignItems = "center";
        dealsModal.style.justifyContent = "center";
        dealsModal.style.zIndex = "9999";
        dealsModal.style.padding = "20px";
        dealsModal.style.boxSizing = "border-box";
        dealsModal.style.overflowY = "auto";


        const dealsBox = document.createElement("div");

        dealsBox.style.background = "#ffffff";
        dealsBox.style.maxWidth = "700px";
        dealsBox.style.width = "100%";
        dealsBox.style.borderRadius = "20px";
        dealsBox.style.padding = "30px";
        dealsBox.style.boxSizing = "border-box";
        dealsBox.style.position = "relative";
        dealsBox.style.boxShadow =
            "0 25px 70px rgba(0,0,0,0.4)";


        dealsBox.innerHTML = `

            <button id="closeDeals"
            style="
                position:absolute;
                right:18px;
                top:18px;
                width:42px;
                height:42px;
                border:0;
                border-radius:50%;
                background:#eeeeee;
                color:#17212b;
                font-size:26px;
                cursor:pointer;
            ">
                ×
            </button>


            <p style="
                color:#b38a3c;
                font-weight:bold;
                letter-spacing:1.5px;
                font-size:13px;
                margin:0 0 8px;
            ">
                GHORCAST SPECIAL OFFERS
            </p>


            <h2 style="
                color:#17212b;
                font-size:30px;
                margin:0 0 10px;
            ">
                Great Hotel Deals
            </h2>


            <p style="
                color:#666;
                line-height:1.6;
                margin-bottom:25px;
            ">
                Discover selected hotel offers available through
                GhorCast.
            </p>


            <!-- DEAL 1 -->

            <div style="
                border:1px solid #eeeeee;
                border-radius:12px;
                padding:18px;
                margin-bottom:15px;
            ">

                <span style="
                    background:#b38a3c;
                    color:white;
                    padding:5px 9px;
                    border-radius:5px;
                    font-size:12px;
                    font-weight:bold;
                ">
                    20% OFF
                </span>


                <h3 style="
                    color:#17212b;
                    margin:12px 0 5px;
                ">
                    Luxury Grand Hotel
                </h3>


                <p style="
                    color:#666;
                    margin:0 0 8px;
                ">
                    📍 Dubai, UAE
                </p>


                <strong style="
                    color:#17212b;
                    font-size:18px;
                ">
                    From $96/night
                </strong>

            </div>


            <!-- DEAL 2 -->

            <div style="
                border:1px solid #eeeeee;
                border-radius:12px;
                padding:18px;
                margin-bottom:15px;
            ">

                <span style="
                    background:#b38a3c;
                    color:white;
                    padding:5px 9px;
                    border-radius:5px;
                    font-size:12px;
                    font-weight:bold;
                ">
                    15% OFF
                </span>


                <h3 style="
                    color:#17212b;
                    margin:12px 0 5px;
                ">
                    Royal View Hotel
                </h3>


                <p style="
                    color:#666;
                    margin:0 0 8px;
                ">
                    📍 Makkah, Saudi Arabia
                </p>


                <strong style="
                    color:#17212b;
                    font-size:18px;
                ">
                    From $81/night
                </strong>

            </div>


            <!-- DEAL 3 -->

            <div style="
                border:1px solid #eeeeee;
                border-radius:12px;
                padding:18px;
                margin-bottom:20px;
            ">

                <span style="
                    background:#b38a3c;
                    color:white;
                    padding:5px 9px;
                    border-radius:5px;
                    font-size:12px;
                    font-weight:bold;
                ">
                    25% OFF
                </span>


                <h3 style="
                    color:#17212b;
                    margin:12px 0 5px;
                ">
                    Ocean Paradise Resort
                </h3>


                <p style="
                    color:#666;
                    margin:0 0 8px;
                ">
                    📍 Cox's Bazar, Bangladesh
                </p>


                <strong style="
                    color:#17212b;
                    font-size:18px;
                ">
                    From $52.50/night
                </strong>

            </div>


            <p style="
                color:#888;
                font-size:12px;
                text-align:center;
                margin:0;
            ">
                Demo offers — real booking availability will
                be connected later.
            </p>

        `;


        dealsModal.appendChild(dealsBox);

        document.body.appendChild(dealsModal);


        // CLOSE BUTTON

        document
            .getElementById("closeDeals")
            .onclick = function () {

                dealsModal.remove();

            };


        // CLOSE OUTSIDE

        dealsModal.onclick = function (event) {

            if (event.target === dealsModal) {

                dealsModal.remove();

            }

        };

    });

}
