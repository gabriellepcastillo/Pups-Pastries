

// var apikey = "live_CNacfBNMvYBnMWMjsQPWwUn7ZCpJ4cCIyiRNClydjUcfNcN3VnqqDh4Thd1wiZqY"    
// var fetchButton = document.getElementById("searchBtn")   

// const url = "https://api.thedogapi.com/v1/images/search"
// fetch (url, {
//     method: "GET",
//     widthCredentials: true,
//     headers: {
//         "x-api-key" :"live_CNacfBNMvYBnMWMjsQPWwUn7ZCpJ4cCIyiRNClydjUcfNcN3VnqqDh4Thd1wiZqY",
//         "Content-Type":"application/json"
//     }
//     })
//     .then(response => response.json ())
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// fetch("https://dog.ceo/api/breeds/list/all")
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {   
//         console.log(data)
//     })

async function start (){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
} 

start()

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
 <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
    ${Object.keys(breedList).map(function (breed){
        return `<option>${breed}</option>`
    }).join('')}
 </select>
`
}

async function loadByBreed(breed) {
    if (breed ! = "Choose a dog breed")  {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        console.log(data)
        createSlideShow(data.message)
    }
}

function createSlideShow(images) {

    document.getElementById("slideshow").innerHTML = 
    `<div class="slide" style="background-image: url('${images[0]}');"></div>
    `

}