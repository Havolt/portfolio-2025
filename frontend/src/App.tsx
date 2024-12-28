import bioImg from './assets/bio.png'
import './App.css'

function App() {

  return (
    <>
      <div className="bio">
        <div className="bio__img">
            <img src={bioImg} className="logo" alt="Vite logo" />
        </div>

        <h1 className="bio__title">Hi, I'm Mark. I'm a web developer and designer.</h1>
      </div>
    </>
  )
}

export default App
