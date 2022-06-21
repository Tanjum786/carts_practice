import './App.css';
import Cards from './Cards';
import Cartcards from './Cartcards';


function App() {
  return (
    <>
      {Cards.map((val)=>{
      return(
        <Cartcards
          key={val.cardId}
          images={val.image}
          price={val.price}
        />
      )
    })}
    {/* <Cartcards/> */}
    </>
  );
}

export default App;
