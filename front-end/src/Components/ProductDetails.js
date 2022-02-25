import { Card } from "react-bootstrap";
// import { button } from "bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Details() {
  const { index } = useParams();
  const [holistics, setHolistics] = useState([]);
  const API = "https://rahmi-store-api.herokuapp.com";

  const imgUrls = [
    "https://i5.walmartimages.com/asr/bd5ef4c8-3874-4fbb-8179-0b93ebc021b0.3498fabed53dc7cea1fd4136742d5314.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211660M000031_1/binu-binu-green-tea-incense-sticks.jpg",
  ];

  console.log(API, "api");

  // use axios to connect backend
  // request, response

  useEffect(() => {
    axios
      .get(`${API}/holistics`)
      .then((res) => setHolistics(res.data))
      .catch((error) => console.warn(`Error: ${error}`));
  }, [API, index]);

  return (
    <div>
      {holistics.length > 0 &&
        holistics.map((holistic, index) => {
          return (
            <div key={index}>
              <Card style={{ width: "20%", height: "20%" }}>
                <Card.Img src={imgUrls[index]} alt="new" img="true" />
                <Card.Body>
                  <Card.Title>{holistic.name}</Card.Title>
                  <Card.Text>{holistic.description}</Card.Text>
                  <Card.Text>Price: ${holistic.price}</Card.Text>
                  <Card.Text>Rating (0-5): {holistic.rating}</Card.Text>
                  <Card.Text>{holistic.featured}</Card.Text>
                </Card.Body>
                <Link to="/cart">
                  <p>
                    <button>Buy Now</button>
                  </p>
                </Link>

                <Link to="/cart">
                  <p>
                    <button>Add to Cart</button>
                  </p>
                </Link>
              </Card>
              <br />
              <br />
            </div>
          );
        })}
    </div>
  );
}

export default Details;
