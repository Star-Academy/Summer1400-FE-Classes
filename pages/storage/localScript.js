function getLocal () {
    let container = document.getElementById("localShow");
    container.innerText = localStorage.getItem("month");
}
function setLocal() {
    localStorage.setItem("month", "July");
}