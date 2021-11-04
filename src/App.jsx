import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Header } from "./components/Header";

function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${
          import.meta.env.VITE_APP_API_TOKEN
        }`
      );

      setResult(res.data.photos);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Carousel>
        {result.map((item) => (
          <Carousel.Item key={item.id}>
            <img src={item.img_src} alt={item.rover.name} />
            <Carousel.Caption>
              <h3>{item.camera.full_name}</h3>
              <p>{`Landing Date: ${item.rover.landing_date} Status: ${item.rover.status}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
