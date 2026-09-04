// =====================================================
// GHORCAST
// Main JavaScript
// =====================================================


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
        "GhorCast search will look for: " +
        searchTerm +
        "\n\nThe full search system will be added in a future version."
    );
}


// ================= NEWSLETTER =================

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");

        const email = emailInput.value.trim();

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

// This allows the copyright year to update automatically.

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        "© " + currentYear + " GhorCast. All rights reserved.";

}
