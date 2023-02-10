// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import Episodes from "../api/episodes.json";
import Reviews from "../api/reviews.json";
import Header from "./Header";
import { Helmet } from 'react-helmet';
// import ico from '../saghiomey.ico'
// eslint-disable-next-line no-unused-vars
import { HashRouter as Router } from "react-router-dom";


function App() {
  // eslint-disable-next-line no-unused-vars
  const [episodes, setepisodes] = React.useState(Episodes);

  return (
    <>
    <Helmet>
    <title>SaghiOMey</title>
    <meta name="description" content="Podcast SaghiOMey" />
    <meta property="og:title" key="og:title" content="SaghiOMey" />
    </Helmet>
    <Router>
    <Header episodes={episodes} reviews = {Reviews} />
    </Router>
    </>
  );
}

export default App;
