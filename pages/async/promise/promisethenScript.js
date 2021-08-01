let text = 'text one;'
const timePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        text = 'text three';

        if (text === 'text two') {
            resolve('successful');
        } else {
            reject('wrong data!');
        }
    }, 2000);
    
});

const setText = () => {
    let output = document.getElementById("output");
    output.innerText = text;
};

function setDisplayTimeOut() {
    timePromise.then(setText)
    .catch((error) => {
        console.log(error);
    });
}

