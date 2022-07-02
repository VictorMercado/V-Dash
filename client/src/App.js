import logo from './logo.svg';
import './App.css';
import VCard from './components/VCard';
import Navbar from './components/Navbar';
import Clock from './components/Clock';
import PokemonController from './components/PokemonController'
import Vcard from './components/VCard';

function App({  }) {
  const links = ["Home","Settings", "About"];
  let comp = [<Vcard />, <Vcard/>,<Vcard/>,<Vcard/>];
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <VCard partyTime={"" + (5 + 10)} party="dude no way"/> */}
          <Navbar navlinks={links}/>

        </header>
        {/* <Clock title={"Clock Block"} /> */}
        {/* <PokemonController /> */}
        {
        comp.map((item, index)=> {
          return <div key={index}>{item} </div> 
          })
        }
      </div>
      <div></div>
    </>

  );
}

export default App;
