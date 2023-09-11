import './App.css';
import OneComponent from './components/OneComponent';


function App() {
  console.log("Hello Dojo!")
  const animals = ["* Learn React ", "* Climb Mt.Everest", "* Run a marathon", "* Feed the dogs"];

  return (
    <div >

      <h1>
        Hello Dojo !
      </h1>
      <OneComponent animals={animals} />


    </div >
  );
}

export default App;
