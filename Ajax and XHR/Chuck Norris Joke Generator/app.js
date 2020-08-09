document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const numberOfJokes = document.querySelector('#number').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${numberOfJokes}`, 'yes')
    
    xhr.onload =function() {
        if(this.status==200) {
            const jokes = document.querySelector('.jokes');
            const jsonVals = JSON.parse(this.responseText);
            let output = '';
            jsonVals.value.forEach(element => {
                output+=`<li>${element.joke}</li>`
            });
            jokes.innerHTML=output;
        }
    }
    xhr.send()
    e.preventDefault();
}
