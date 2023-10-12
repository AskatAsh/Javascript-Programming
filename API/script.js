// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// // fetch(url)
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// function loadData(){
//     fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

// function loadUserData(){
//     const ul = document.getElementById('usersList');
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => data.forEach(user => {
//             // console.log(user.username)
//             const li = document.createElement('li');
//             li.innerHTML = user.username
//             ul.appendChild(li)
//         }))
// }

function loadPostsData(){
    const div = document.getElementById('postsData');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.forEach(post => {
            console.log(post)
            const postBox = document.createElement('div')
            postBox.classList.add('post-box')
            postBox.innerHTML = `
                <h3>Title: ${post.title}</h3>
                <p class="user-id"><span>UserId: ${post.userId} </span> <span>Id: ${post.id}</span></p>
                <p class="text">Body: ${post.body}</p>
                `
            div.appendChild(postBox)
        }))
}

loadPostsData();
