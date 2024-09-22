const main = document.getElementById("main");
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("prev-btn");

let data;
let index = 0;

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    data = await response.json()
    main.innerHTML = `
        <h1>${data[index].name}</h1>
        <p>Email : ${data[index].email}</p>
        <p>Phone : ${data[index].phone}</p>
        <p>Website : ${data[index].website}</p>
    `
}

fetchUsers()

nextBtn.addEventListener('click', () => {
    if (data && (index < data.length - 1)) {
        index = index + 1;
        main.innerHTML = `
        <h1>${data[index].name}</h1>
        <p>Email : ${data[index].email}</p>
        <p>Phone : ${data[index].phone}</p>
        <p>Website : ${data[index].website}</p>
    `}
})

previousBtn.addEventListener('click', () => {
    if (data && (index != 0)) {
        index = index - 1;
        main.innerHTML = `
        <h1>${data[index].name}</h1>
        <p>Email : ${data[index].email}</p>
        <p>Phone : ${data[index].phone}</p>
        <p>Website : ${data[index].website}</p>
    `}
})