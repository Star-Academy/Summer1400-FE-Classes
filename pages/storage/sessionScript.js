function getSession () {
    let container = document.getElementById("sessionShow");
    container.innerText = sessionStorage.getItem("username");
}
function setSession() {
    sessionStorage.setItem("username", "codestar");
}