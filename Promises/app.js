
function getJokes() {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
    xhr.open('POST',`http://api.icndb.com/jokes/random`, 'yes')
    
    xhr.onload =function() {
        if(this.status==200) {
            resolve(this.responseText);
        }
        else {
            reject('Something went wrong')
        }
    }
    xhr.send()
    })   
}

getJokes().then((response) => {
    const jsonVals = JSON.parse(response);
            let output = '';
            output+=`${jsonVals.value.joke}`
            document.querySelector('#joke').innerHTML = output
}).catch((err) => {
    console.log(`Damn : ${err}`)
});