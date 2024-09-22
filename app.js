const main = document.getElementById("main");
const nextBtn = document.getElementById("next-btn");

let data;
let index = 0;

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    data = await response.json()
    main.innerHTML = `
        <h1>${data[index].name}</h1>
        <p>${data[index].email}</p>
        <p>${data[index].phone}</p>
    `
}
fetchUsers()
nextBtn.addEventListener('click', () => {
    if (data && (index < data.length - 1)) {
        index = index + 1;
        main.innerHTML = `
        <h1>${data[index].name}</h1>
        <p>${data[index].email}</p>
        <p>${data[index].phone}</p>
    `}
})