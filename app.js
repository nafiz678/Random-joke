

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
    setup.innerHTML = `<span class="font-medium text-lg lg:text-xl">Setup : </span>${data.setup}`;

    const punchline = document.getElementById("punchline");
    punchline.innerHTML =`<span class="font-medium text-lg lg:text-xl">Punch line : </span>${data.punchline}`;
}