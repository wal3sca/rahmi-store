import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const API = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  let navigate = useNavigate();

  const [editProduct, setEditProduct] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const editedProduct = (editProduct) => {
    axios
      .put(`${API}/products/${index}`, editProduct)
      .then(
        () => {
          navigate(`/products/${index}`);
        },
        (error) => console.warn(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (event) => {
    setEditProduct({
      ...editProduct,
      [event.target.index]: event.target.value,
    });
  };

  const handleCheckBox = () => {
    setEditProduct({ ...editProduct, featured: !editProduct.featured });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editedProduct(editProduct, index);
  };

  return (
    <div className="edit">
      <br />
      <br />
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          value={editProduct.name}
          onChange={handleText}
          placeholder="CHANGE ME"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <input
          type="text"
          id="description"
          value={editProduct.description}
          onChange={handleText}
          placeholder="DESCRIBE ME"
        />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <input
          type="number"
          id="price"
          value={editProduct.price}
          onChange={handleText}
          placeholder="$$$"
        />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          type="number"
          id="rating"
          value={editProduct.rating}
          onChange={handleText}
          placeholder="5 STARS?"
        />
        <br />
        <label htmlFor="featured">Featured:</label>
        <br />
        <input
          type="checkbox"
          id="featured"
          value={editProduct.featured}
          onChange={handleCheckBox}
          placeholder="FEAT"
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />
    </div>
  );
}

export default EditProduct;
