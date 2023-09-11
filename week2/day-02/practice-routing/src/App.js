import React from 'react';
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";


const Home = () => <h1>Welcome</h1>;

const PageNumber = ({ match }) => {
  const { number } = match.params;
  return <h1>{number}</h1>;
};

const PageWord = ({ match }) => {
  return <h1>{JSON.stringify(match)}</h1>;
};

const PageWordS = ({ match }) => {
  const { word, color1, color2 } = match.params;
  const style = {
    color: color1,
    backgroundColor: color2,
  };
  return <h1 style={style}>{word}</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/home" Component={Home} />
      <Route path="/:number" Component={PageNumber} />
      <Route path="/:word" component={PageWord} />
      <Route path="/:word/:color1/:color2" component={PageWordS} />

    </Routes>
  );
};

export default App;