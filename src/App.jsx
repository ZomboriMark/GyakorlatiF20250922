import './css/general.css';
import Hello from './components/Hello';
import {Flip, Flip2} from './components/Flip';
import Targyak from './components/Targyak';
import Szamlalo from './components/Szamlalo';


function App() {

  return (
    <>
      <h1>Második React app</h1>
      <Hello/>
      <Flip/>
      <Flip2/>
      <Targyak/>
      <Szamlalo/>
    </>
  )
}

export default App
