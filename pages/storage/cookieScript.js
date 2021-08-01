let expireDate = new Date();
let expireTime = expireDate.getTime() + 3600*24*30000;
expireDate.setTime(expireTime);

let pastDate = new Date(10);
let container = document.getElementById("container");
container.textContent = document.cookie;

function clearCookies() {
    document.cookie = `language=js; expires=${pastDate}; path=/`;
    container.textContent = document.cookie;
}

function setCookiesOnThisPage() {
    document.cookie = `language=js; expires=${expireDate}; path=/`;
    document.textContent = document.cookie;
}