import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [pokemon, setPokemon] = useState(null);

  const [loading, setLoading] = useState(false);

  async function buscarPokemonAleatorio(){
    const id = Math.floor(Math.random() * 1025) + 1;
    setLoading(true);

    try{
       const resposta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
       );
       const dados = await resposta.json();

       setPokemon(dados);
    } catch (erro) {
      console.error("Erro ao buscar Pokemon", erro);
    } finally{
      setLoading(false);
    }
  }
  return (
    <main>
    <h1>Pokemon Aleatorio</h1>
    <button onClick={buscarPokemonAleatorio}> Buscar Pokemon
    </button>
    
    {loading && <p>Carregando...</p>}

    {pokemon && !false && (
       <div>
        <img src={pokemon.sprites.front_default}
         alt={pokemon.name} />
         <h2>{pokemon.name}</h2>
       </div>
    )}
    </main>
     
  )
}

export default App
