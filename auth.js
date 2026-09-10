/* GhorCast Authentication
   Powered by Supabase Auth.
*/

const SUPABASE_URL = "https://yrfhlzyfnljpchedmohr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_7DcAYwdR1gefh9HSvRsw_w_spCyg2JG";
const GHORCAST_SITE_URL = "https://mzaman007.github.io/ghorcast/";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

function authConfigured() {
    return !SUPABASE_URL.includes("YOUR_") &&
           !SUPABASE_PUBLISHABLE_KEY.includes("YOUR_");
}

function showAuthMessage(message, type = "error") {
    const box = document.getElementById("authMessage");
    if (!box) return;

    box.textContent = message;
    box.className = `auth-message ${type}`;
    box.hidden = false;
}

async function registerUser(event) {
    event.preventDefault();

    if (!authConfigured()) {
        showAuthMessage("Authentication is not connected yet. Add your Supabase project settings to auth.js.");
        return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        showAuthMessage("Passwords do not match.");
        return;
    }

    if (password.length < 6) {
        showAuthMessage("Password must be at least 6 characters.");
        return;
    }

    const { error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: { full_name: name },
            emailRedirectTo: GHORCAST_SITE_URL + "account.html"
        }
    });

    if (error) {
        showAuthMessage(error.message);
        return;
    }

    showAuthMessage(
        "Account created. Check your email if email confirmation is enabled, then sign in.",
        "success"
    );

    document.getElementById("registerForm").reset();
}

async function loginUser(event) {
    event.preventDefault();

    if (!authConfigured()) {
        showAuthMessage("Authentication is not connected yet. Add your Supabase project settings to auth.js.");
        return;
    }

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        showAuthMessage(error.message);
        return;
    }

    window.location.href = "account.html";
}

async function loadAccount() {
    if (!authConfigured()) {
        showAuthMessage("Authentication is not connected yet. Add your Supabase project settings to auth.js.");
        return;
    }

    const { data: { user }, error } = await supabaseClient.auth.getUser();

    if (error || !user) {
        window.location.href = "login.html";
        return;
    }

    const name = user.user_metadata?.full_name || "GhorCast Traveler";

    const nameElement = document.getElementById("accountName");
    const emailElement = document.getElementById("accountEmail");

    if (nameElement) nameElement.textContent = name;
    if (emailElement) emailElement.textContent = user.email || "";
}

async function logoutUser() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        showAuthMessage(error.message);
        return;
    }

    window.location.href = "login.html";
}

if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", registerUser);
}

if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", loginUser);
}

if (document.getElementById("accountPage")) {
    loadAccount();
}
