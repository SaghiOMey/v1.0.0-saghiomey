// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import Episodes from "../api/episodes.json";
import Reviews from "../api/reviews.json";
import Header from "./Header";
// eslint-disable-next-line no-unused-vars
import { HashRouter as Router } from "react-router-dom";


function App() {
  // eslint-disable-next-line no-unused-vars
  const [episodes, setepisodes] = React.useState(Episodes);

  return (
    <>
    <Router>
    <Header episodes={episodes} reviews = {Reviews} />
    </Router>
    </>
  );
}

export default App;
