let html;
let name = 'Amogh'
let age = 22;

function HelloWorld() {
    return 'Hello World';
}
html = `
    <h1> ${HelloWorld()} </h1>
    <ul>
        <li>${name}</li>
        <li>${age}</li>
    </ul>
`;

document.body.innerHTML = html;