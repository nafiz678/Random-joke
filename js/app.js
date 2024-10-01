

function loadData2()
{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json()) 
    .then(data => console.log(data))
}

function loadUsers()
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayUsers(data))
}


function displayUsers (data)
{
    console.log(data)
}







function randomJoke()
{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => jokeGen(data))
}


function jokeGen(data)
{
    console.log(data);
    const type = document.getElementById("type");
    type.innerHTML = `Category : ${data.type}`;

    const setup = document.getElementById("setup");
    setup.innerHTML = `<span class="font-medium text-xl">Setup : </span>${data.setup}`;

    const punchline = document.getElementById("punchline");
    punchline.innerHTML =`<span class="font-medium text-xl">Punch line : </span>${data.punchline}`;
}