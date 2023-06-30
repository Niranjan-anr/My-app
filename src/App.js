import About from './About';
import './App.css';
import Header from './MainHeader';
import NeedyPeople from './people';


function App() {
  return (
    <div className="App">
     <Header/>
     <NeedyPeople/>
     <About/>
    </div>
  );
}

export default App;
