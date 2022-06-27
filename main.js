// alert('JavaScript is working');

const pokemon = ['charmander', 'bulbasaur', 'squirtle']

pokemonIDs = ['001', '004', '007']
// DOM = Document Object Model
//  loop over every ID
// create an html element
// set the html element values
// append HTML element to the DOM

pokemonIDs.map((id) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('img Url', imgUrl)
    let div = document.createElement('div') 
    div.setAttribute('class', 'pokemon-card') 
    let img = document.createElement('img') 
    img.src = imgUrl
    img.setAttribute('height', '100px')
    img.setAttribute('width', '100px')
    div.append(img)
    document.body.append(div)
})
