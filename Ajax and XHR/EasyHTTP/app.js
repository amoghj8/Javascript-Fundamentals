const xhr = new easyHTTP();

// let getPosts = xhr.get('https://jsonplaceholder.typicode.com/posts', function (response) {
//     console.log(response)
// })

const data = {
    title: 'Test title',
    body: 'Test body'
};

// let postResponse = xhr.post('https://jsonplaceholder.typicode.com/posts',data,function (response) {
//     console.log(response)
// })

// let putResponse = xhr.put('https://jsonplaceholder.typicode.com/posts/1', data, function (response) {
//     console.log(response);
// })

let deleteResponse = xhr.delete('https://jsonplaceholder.typicode.com/posts/1', function (response) {
    console.log(response);
})


