// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Button from 'csearch_button'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/search_button'
// import axios from 'axios'

function App() {

  return (
    <>
      <div>
        <a href="" target="_blank">
        </a>
        <a target="_blank">
          <img id="pokeBall"src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" className="logo react" alt="React logo" />
        </a>
    
      </div>
      <div className="card">
      <Button/>
      <img id="randomPoke" ></img>
      <h2 id="similar"></h2>
      <img id = "pokemon0"></img>
      <img id = "pokemon1"></img>
      <img id = "pokemon2"></img>
      <img id = "pokemon3"></img>
      <img id = "pokemon4"></img>

      </div>

      <p className="read-the-docs">
        1. Click the GENERATE button to get a random Pokemon<br></br>
        2. Admire the Pokemon!
      </p>
      <a href="https://pokeapi.co/" target="_blank"> 
      <p id="powered">Powered By</p><br></br>
      <img id="pokeapilogo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="logo" alt="Vite logo" /><br></br>
      </a>
    </>
  )
}

export default App

