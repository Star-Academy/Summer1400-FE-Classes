let text = 'text one;'
let setDisplayTimeOut = () => {
    setTimeout(() => {
        text = 'text two';
    }, 2000);
    let output = document.getElementById("output");
    output.innerText = text;
}

