// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Episodes from "../api/episodes.json";
import Reviews from "../api/reviews.json";
import Header from "./Header";
import { Helmet } from "react-helmet";
import ico from "../saghiomey.ico";
// eslint-disable-next-line no-unused-vars
import { HashRouter as Router } from "react-router-dom";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [episodes, setepisodes] = React.useState(Episodes);

  return (
    <>
      <Helmet>
        <title>v1-0-0.SaghiOMey</title>
        <meta property="og:title" key="og:title" content="v1-0-0.SaghiOMey" />
        <meta
          property="og:description"
          key="og:description"
          content="Podcast SaghiOMey v1-0-0"
        />
        <meta property="og:image" key="og:image" content={ico} />
      </Helmet>
      <Router>
        <Header episodes={episodes} reviews={Reviews} />
      </Router>
    </>
  );
}

export default App;
