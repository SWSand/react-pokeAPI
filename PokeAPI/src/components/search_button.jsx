import axios from 'axios';

function Button() {
    return (
        <>
        <button onClick={numGen}>GENERATE</button><br></br><br></br>
        </>
    )
}

const getPokemon = async (pokemon) => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = response.data;
        // console.log(data)
        let pokeImg = document.getElementById("pokeBall")
        pokeImg.src = data.sprites.front_default

        let similar = document.getElementById("similar")
        similar.textContent = "Similar Types"
        let type = data.types[0]['type'].name
        console.log(type)

        let response2 = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        let responseData =  response2.data;
        console.log(responseData)
        let similarTypes = [responseData.pokemon[0].pokemon.name, responseData.pokemon[1].pokemon.name, responseData.pokemon[2].pokemon.name, responseData.pokemon[3].pokemon.name, responseData.pokemon[4].pokemon.name]

        for(let i=0; i<similarTypes.length; i++){
            let response3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${similarTypes[i]}`)
            let responseData2 = response3.data
            console.log(responseData2)
            let pokemon = document.getElementById(`pokemon${i}`)
            pokemon.src = responseData2.sprites.front_default
        }
    } catch(error) {
        console.log(error.status)
    }
  }

const numGen = () => {
    let num = Math.floor(Math.random() * 1000) + 1
    console.log(num)
    getPokemon(num)
}

export default Button;