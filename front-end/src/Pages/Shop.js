import { Card } from "react-bootstrap";
import { Button } from "bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

const Shop = () => {
  // const URL = process.env.REACT_APP_API_URL;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Oud Candle</Card.Title>
          <Card.Text>
            Handmade soy candle with an earthy 'oud' scent. 100% vegan and
            cruelty free.
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Frankincense Incense</Card.Title>
          <Card.Text>Handmade incense.</Card.Text>
          <Button variant="primary">Buy Now</Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
