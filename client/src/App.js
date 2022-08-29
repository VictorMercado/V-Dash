import logo from './logo.svg';
import './App.css';
import VCard from './components/mainContent/VCard';
import Navbar from './components/header/Navbar';
import Clock from './components/Clock';
import PokemonController from './components/mainContent/PokemonController'
import Vcard from './components/mainContent/VCard';
import VCardController from './components/mainContent/VCardController';

let astring = 'victor';
function Test() {
  return(<div>
    {
      astring
    }
  </div>);
}

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
        <VCardController />
        {/* <Clock title={"Clock Block"} /> */}
        {/* <PokemonController /> */}
        {/* {
          comp.map((item, index) => {
              return <div key={index}>{item} </div> 
            })
        } */}
      </div>
      <div></div>
    </>

  );
}

export default App;
