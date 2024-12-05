"use strict";

// Function to get a cookie by its name
const getCookieByName = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return ""; // Return empty string if cookie not found
};

// Function to set a cookie
const setCookie = (name, value, days = 7) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const expires = `expires=${expirationDate.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
};

// Function to delete a cookie by setting its expiration date in the past
const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

// Function to navigate to another page
const goToPage = (url) => {
    window.location.href = url;
};

