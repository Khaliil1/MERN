import logo from './logo.svg';
import './App.css';


function App() {
  const domContainer = document.querySelector('#root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement("h1", {}, "Our First React page has rendered"));

  return (
    <div>
      <h2>What we are going to do today ? </h2>
    </div >
  );
}

export default App;
