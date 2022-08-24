import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Data from './Components/Data'
import Card from './Components/Card/Card';

const cards = Data.map(singleData =>{
  return(
    <Card
      data = {singleData}
    />
  )
});

function App() {
  return (
    <div className="App">
      <Header/>
      {cards}
      {/* <Card data = {Data[0]} /> */}
    </div>
  );
}

export default App;
