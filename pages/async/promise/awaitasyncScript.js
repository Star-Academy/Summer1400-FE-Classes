let text = 'text one;'
async function getTimePromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            text = 'text two';
            resolve();
        }, 2000);
    });
}

async function setDisplayTimeOut() {
    let output = document.getElementById("output");
    await getTimePromise();
    output.innerText = text;
}

