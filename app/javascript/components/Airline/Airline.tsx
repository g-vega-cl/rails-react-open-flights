import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const Airline = ({ match }) => {
  const [airline, setAirline] = useState({});
  const [review, setRreview] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const url = `/api/v1/airlines/${match.params.slug}`;

    axios
      .get(url)
      .then((resp) => setAirline(resp.data))
      .catch((resp) => console.log("500 ", resp));
  }, []);

  return (
    <div className="wrapper">
      <div className="column">
        <Header attributes={airline.data.attributes}/>
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">Here we add review form</div>
      </div>
    </div>
  );
};

export default Airline;
