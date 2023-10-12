// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const url = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))
function loadData(){
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUserData(){
    const ul = document.getElementById('usersList');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data.forEach(user => {
            // console.log(user.username)
            const li = document.createElement('li');
            li.innerHTML = user.username
            ul.appendChild(li)
        }))
}