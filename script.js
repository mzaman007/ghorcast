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
// ================= DESTINATIONS =================

const destinationCards =
    document.querySelectorAll(".destination-card");


const destinationDetails = [

    {
        name: "Saudi Arabia",
        image:
            "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80",

        description:
            "Discover the beauty, culture and hospitality of Saudi Arabia. Explore historic places, modern cities and important destinations.",

        places: [
            "🕋 Makkah",
            "🕌 Madinah",
            "🏙️ Riyadh",
            "🌊 Jeddah"
        ]
    },


    {
        name: "Bangladesh",
        image:
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",

        description:
            "Explore Bangladesh, a beautiful country known for rivers, beaches, green landscapes, culture and warm hospitality.",

        places: [
            "🏖️ Cox's Bazar",
            "🌿 Sylhet",
            "🌳 Sundarbans",
            "🏙️ Dhaka"
        ]
    },


    {
        name: "United Arab Emirates",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",

        description:
            "Experience the United Arab Emirates with its luxury hotels, modern cities, shopping, beaches and spectacular architecture.",

        places: [
            "🏙️ Dubai",
            "🕌 Abu Dhabi",
            "🏖️ Sharjah",
            "⛰️ Ras Al Khaimah"
        ]
    },


    {
        name: "Turkey",
        image:
            "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",

        description:
            "Discover Turkey, where historic cities, beautiful coastlines, traditional culture and modern hospitality come together.",

        places: [
            "🕌 Istanbul",
            "🎈 Cappadocia",
            "🏖️ Antalya",
            "🏛️ Ephesus"
        ]
    }

];


// ================= OPEN DESTINATION =================

function openDestination(destination) {

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


    const box = document.createElement("div");

    box.style.background = "#ffffff";
    box.style.maxWidth = "620px";
    box.style.width = "100%";
    box.style.borderRadius = "20px";
    box.style.overflow = "hidden";
    box.style.position = "relative";
    box.style.boxShadow =
        "0 25px 70px rgba(0,0,0,0.4)";


    let placesHTML = "";


    destination.places.forEach(function (place) {

        placesHTML += `

            <div style="
                padding:12px;
                background:#f6f6f6;
                border-radius:8px;
                color:#444;
                font-size:14px;
            ">
                ${place}
            </div>

        `;

    });


    box.innerHTML = `

        <!-- DESTINATION IMAGE -->

        <div style="
            width:100%;
            height:250px;
            background-image:url('${destination.image}');
            background-size:cover;
            background-position:center;
        "></div>


        <!-- CLOSE BUTTON -->

        <button id="closeDestination"
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


        <!-- DESTINATION INFORMATION -->

        <div style="padding:30px;">

            <p style="
                color:#b38a3c;
                font-weight:bold;
                letter-spacing:1.5px;
                font-size:13px;
                margin:0 0 8px;
            ">
                GHORCAST DESTINATION
            </p>


            <h2 style="
                font-size:30px;
                margin:0 0 15px;
                color:#17212b;
            ">
                ${destination.name}
            </h2>


            <p style="
                color:#555;
                line-height:1.7;
                margin:0 0 25px;
            ">
                ${destination.description}
            </p>


            <h3 style="
                color:#17212b;
                margin:0 0 12px;
                font-size:20px;
            ">
                Popular Places
            </h3>


            <div style="
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:10px;
                margin-bottom:25px;
            ">

                ${placesHTML}

            </div>


            <button id="destinationHotels"
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
                Explore Hotels in ${destination.name}
            </button>

        </div>

    `;


    modal.appendChild(box);

    document.body.appendChild(modal);


    // ================= CLOSE =================

    const closeButton =
        box.querySelector("#closeDestination");


    closeButton.onclick = function () {

        modal.remove();

    };


    // ================= CLOSE OUTSIDE =================

    modal.onclick = function (event) {

        if (event.target === modal) {

            modal.remove();

        }

    };


    // ================= EXPLORE HOTELS =================

    const hotelsButton =
        box.querySelector("#destinationHotels");


    hotelsButton.onclick = function () {

        modal.remove();

        document
            .getElementById("hotels")
            .scrollIntoView({
                behavior: "smooth"
            });

    };

}


// ================= DESTINATION BUTTONS =================

destinationCards.forEach(function (card, index) {

    card.style.cursor = "pointer";


    card.addEventListener("click", function () {

        if (destinationDetails[index]) {

            openDestination(
                destinationDetails[index]
            );

        }

    });

});
// ================= ARTICLES =================

const articleCards =
    document.querySelectorAll(".article-card");


const articleDetails = [

    {
        category: "Travel Guide",
        title: "10 Things to Know Before Your Next Hotel Stay",
        date: "September 5, 2026",
        author: "GhorCast Travel",

        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",

        content: `
            <p>
                Choosing the right hotel can make a big difference
                to your travel experience. Before booking your next
                stay, there are several important things to consider.
            </p>

            <h3>1. Check the Location</h3>

            <p>
                A hotel may look attractive online, but its location
                is equally important. Check how close it is to the
                places you want to visit.
            </p>

            <h3>2. Read the Hotel Facilities</h3>

            <p>
                Check whether the hotel provides the facilities you
                actually need, such as Wi-Fi, breakfast, parking,
                swimming pool or restaurant services.
            </p>

            <h3>3. Compare Prices</h3>

            <p>
                Compare the hotel price with other available options.
                Look carefully at what is included in the room price.
            </p>

            <h3>4. Check Reviews</h3>

            <p>
                Guest reviews can provide useful information about
                cleanliness, service, location and the overall hotel
                experience.
            </p>

            <p>
                With a little research before booking, you can make
                your hotel stay more comfortable and enjoyable.
            </p>
        `
    },


    {
        category: "Destination",
        title: "Beautiful Destinations You Should Discover",
        date: "September 4, 2026",
        author: "GhorCast Travel",

        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

        content: `
            <p>
                The world is full of beautiful destinations waiting
                to be explored. From busy modern cities to peaceful
                beaches and historic locations, every destination
                offers a different experience.
            </p>

            <h3>Discover Something New</h3>

            <p>
                Travelling allows you to experience different
                cultures, food, landscapes and traditions.
            </p>

            <h3>Plan Before You Travel</h3>

            <p>
                Research the destination, accommodation, transportation
                and important attractions before starting your journey.
            </p>

            <h3>Make Your Journey Memorable</h3>

            <p>
                Take time to explore local places instead of only
                visiting the most famous attractions.
            </p>

            <p>
                GhorCast will continue to bring you travel inspiration
                and destination ideas from around the world.
            </p>
        `
    },


    {
        category: "Hotel Tips",
        title: "How to Choose the Right Hotel for Your Trip",
        date: "September 3, 2026",
        author: "GhorCast Hotels",

        image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",

        content: `
            <p>
                Finding the right hotel depends on your destination,
                budget and the type of experience you want.
            </p>

            <h3>Think About Your Budget</h3>

            <p>
                Decide how much you want to spend before comparing
                different hotels.
            </p>

            <h3>Consider Your Travel Purpose</h3>

            <p>
                A business traveller may need different facilities
                from a family travelling for a holiday.
            </p>

            <h3>Look at the Location</h3>

            <p>
                Staying near important attractions or transportation
                can save both time and travel costs.
            </p>

            <h3>Check What Is Included</h3>

            <p>
                Always check whether breakfast, Wi-Fi, parking and
                other facilities are included in the advertised price.
            </p>

            <p>
                The best hotel is not always the most expensive one.
                Choose the hotel that best matches your actual needs.
            </p>
        `
    }

];


// ================= OPEN ARTICLE =================

function openArticle(article) {

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


    const box = document.createElement("div");

    box.style.background = "#ffffff";
    box.style.maxWidth = "760px";
    box.style.width = "100%";
    box.style.borderRadius = "20px";
    box.style.overflow = "hidden";
    box.style.position = "relative";
    box.style.boxShadow =
        "0 25px 70px rgba(0,0,0,0.4)";


    box.innerHTML = `

        <!-- ARTICLE IMAGE -->

        <div style="
            width:100%;
            height:300px;
            background-image:url('${article.image}');
            background-size:cover;
            background-position:center;
        "></div>


        <!-- CLOSE BUTTON -->

        <button id="closeArticle"
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


        <!-- ARTICLE CONTENT -->

        <div style="
            padding:35px;
        ">

            <span style="
                display:inline-block;
                background:#b38a3c;
                color:#ffffff;
                padding:6px 11px;
                border-radius:5px;
                font-size:12px;
                font-weight:bold;
                margin-bottom:15px;
            ">
                ${article.category}
            </span>


            <h2 style="
                color:#17212b;
                font-size:32px;
                line-height:1.25;
                margin:0 0 12px;
            ">
                ${article.title}
            </h2>


            <p style="
                color:#888;
                font-size:13px;
                margin:0 0 28px;
            ">
                ${article.date} &nbsp; • &nbsp; ${article.author}
            </p>


            <div style="
                color:#555;
                font-size:16px;
                line-height:1.8;
            ">

                ${article.content}

            </div>


            <div style="
                margin-top:30px;
                padding-top:20px;
                border-top:1px solid #eeeeee;
                text-align:center;
            ">

                <p style="
                    color:#999;
                    font-size:13px;
                    margin:0;
                ">
                    More travel stories coming soon on GhorCast.
                </p>

            </div>

        </div>

    `;


    modal.appendChild(box);

    document.body.appendChild(modal);


    // ================= CLOSE =================

    box.querySelector("#closeArticle").onclick =
        function () {

            modal.remove();

        };


    // ================= CLOSE OUTSIDE =================

    modal.onclick = function (event) {

        if (event.target === modal) {

            modal.remove();

        }

    };

}


// ================= ARTICLE BUTTONS =================

articleCards.forEach(function (card, index) {

    card.style.cursor = "pointer";


    card.addEventListener("click", function () {

        if (articleDetails[index]) {

            openArticle(articleDetails[index]);

        }

    });

});
// ================= NEWS =================

const newsItems =
    document.querySelectorAll(".news-item");


const newsDetails = [

    {
        category: "Tourism",
        title: "Tourism and hotel industry updates",
        date: "September 5, 2026",
        author: "GhorCast News",

        image:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",

        content: `
            <p>
                The tourism and hospitality industry continues to
                develop as travellers explore new destinations and
                look for better accommodation experiences.
            </p>

            <h3>Travel Industry</h3>

            <p>
                Hotels, resorts and tourism businesses are continuing
                to improve their services and create new experiences
                for visitors.
            </p>

            <h3>What Travellers Should Know</h3>

            <p>
                Travellers should compare accommodation, transportation
                and destination information before planning a trip.
            </p>

            <p>
                GhorCast will continue to bring useful tourism,
                hotel and travel updates to its readers.
            </p>
        `
    },


    {
        category: "Travel",
        title: "New travel opportunities for visitors",
        date: "September 4, 2026",
        author: "GhorCast Travel",

        image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",

        content: `
            <p>
                Travellers today have more opportunities to discover
                destinations around the world.
            </p>

            <h3>Explore New Destinations</h3>

            <p>
                From historic cities to beaches and natural landscapes,
                different destinations offer unique experiences.
            </p>

            <h3>Plan Your Journey</h3>

            <p>
                Before travelling, check accommodation options,
                transportation, local attractions and important
                travel requirements.
            </p>

            <p>
                Follow GhorCast for more destination ideas and travel
                information.
            </p>
        `
    },


    {
        category: "Hotels",
        title: "New hotel experiences arriving soon",
        date: "September 3, 2026",
        author: "GhorCast Hotels",

        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",

        content: `
            <p>
                The hotel industry continues to introduce new
                accommodation experiences for travellers.
            </p>

            <h3>Better Guest Experiences</h3>

            <p>
                Modern hotels are focusing on comfortable rooms,
                convenient facilities and better guest services.
            </p>

            <h3>Choosing a Hotel</h3>

            <p>
                When choosing accommodation, consider location,
                facilities, reviews and price before making a decision.
            </p>

            <p>
                GhorCast will feature more hotels, resorts and
                accommodation opportunities in the future.
            </p>
        `
    }

];


// ================= OPEN NEWS =================

function openNews(news) {

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


    const box = document.createElement("div");

    box.style.background = "#ffffff";
    box.style.maxWidth = "760px";
    box.style.width = "100%";
    box.style.borderRadius = "20px";
    box.style.overflow = "hidden";
    box.style.position = "relative";
    box.style.boxShadow =
        "0 25px 70px rgba(0,0,0,0.4)";


    box.innerHTML = `

        <!-- NEWS IMAGE -->

        <div style="
            width:100%;
            height:300px;
            background-image:url('${news.image}');
            background-size:cover;
            background-position:center;
        "></div>


        <!-- CLOSE BUTTON -->

        <button id="closeNews"
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


        <!-- NEWS CONTENT -->

        <div style="
            padding:35px;
        ">

            <span style="
                display:inline-block;
                background:#b38a3c;
                color:#ffffff;
                padding:6px 11px;
                border-radius:5px;
                font-size:12px;
                font-weight:bold;
                margin-bottom:15px;
            ">
                ${news.category}
            </span>


            <h2 style="
                color:#17212b;
                font-size:32px;
                line-height:1.25;
                margin:0 0 12px;
            ">
                ${news.title}
            </h2>


            <p style="
                color:#888;
                font-size:13px;
                margin:0 0 28px;
            ">
                ${news.date} &nbsp; • &nbsp; ${news.author}
            </p>


            <div style="
                color:#555;
                font-size:16px;
                line-height:1.8;
            ">

                ${news.content}

            </div>


            <div style="
                margin-top:30px;
                padding-top:20px;
                border-top:1px solid #eeeeee;
                text-align:center;
            ">

                <p style="
                    color:#999;
                    font-size:13px;
                    margin:0;
                ">
                    More news and travel updates coming soon on GhorCast.
                </p>

            </div>

        </div>

    `;


    modal.appendChild(box);

    document.body.appendChild(modal);


    // ================= CLOSE =================

    box.querySelector("#closeNews").onclick =
        function () {

            modal.remove();

        };


    // ================= CLOSE OUTSIDE =================

    modal.onclick = function (event) {

        if (event.target === modal) {

            modal.remove();

        }

    };

}


// ================= NEWS BUTTONS =================

newsItems.forEach(function (item, index) {

    item.style.cursor = "pointer";


    item.addEventListener("click", function () {

        if (newsDetails[index]) {

            openNews(newsDetails[index]);

        }

    });

});
