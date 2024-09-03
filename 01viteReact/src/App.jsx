import Chai from './chai'
function App() {

  const username = "Chai aur Code"

  return (
    <>
    <Chai/>
    <h1>Chai aur React with Vite | {username}</h1>  // here {username} is evaluated expression
    <p>It is a paragraph</p>
    </>
  )
}

export default App; 
