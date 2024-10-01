const user = {
    id: 1,
    name: "Gorib Amir",
    job: "Actor"
}
//JavaScript object notation
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);
//{ id: 1, name: 'Gorib Amir', job: 'Actor' } -------------> JS
//{"id":1,"name":"Gorib Amir","job":"Actor"}--------------->JSON

const shop = {
     owner : "alia",
     address: {
        street: "kochu khet vhut er goli",
        city : "ranvir",
        country: "BD"
     },
     products : ["laptop", "mic", "monitor", "keyboard"],
     revenue : 45000,
     isOpen : true,
     isNew : false
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON)
console.log(shopObj);