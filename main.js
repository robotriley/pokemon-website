// alert('JavaScript is working');
// const pokemon = ['bulbasaur', 'charmander', 'squirtle']
pokemonIDs = ['001', '004', '007']
const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'},
]
const containerDiv = document.querySelector('#container')

pokemon.map((element, index) => {
    console.log(element)
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div') 
    let h3 = document.createElement('h3')
    h3.innerText = element.name
    div.setAttribute('class', 'pokemon-card') 
    let img = document.createElement('img') 
    img.src = imgUrl    
    div.append(img, h3)
    containerDiv.append(div)
})



// DOM = Document Object Model
//  loop over every ID
// create an html element
// set the html element values
// append HTML element to the DOM
// objects are "associative arrays"