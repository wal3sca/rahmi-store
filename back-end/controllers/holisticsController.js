// defines routes

const express = require("express");
const holistics = express.Router();

const {
  getAllProducts,
  addProduct,
  getOneProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/holistics");

// ROUTES

// gets all holisitics, then responds to send back all holistics
holistics.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.status(200).json(allProducts);
});

holistics.get("/:id", async (req, res) => {
  console.log("GET to /holistics/:id");
  console.log(req.params.id);
  const holistics = await getOneProduct(req.params.id);
  res.status(200).json(holistics);
});

holistics.post("/", async (req, res) => {
  console.log("POST to /holistics");
  const newProduct = req.body;
  console.log(newProduct);
  const holistics = await addProduct(newProduct);
  res.status(200).json(holistics);
});

holistics.delete("/:id", async (req, res) => {
  console.log("DELETE to /holistics/:id");
  try {
    const holistics = await deleteProduct(req.params.id);
    res.status(200).json(holistics);
  } catch (error) {
    return error;
  }
});

holistics.put("/:id", async (req, res) => {
  console.log("PUT to /holistics/:id");
  const { id } = req.params;
  const holistics = req.body;
  console.log(id);
  console.log(holistics);

  try {
    const updated = await updateProduct(holistics, id);

    res.status(200).json(updated);
  } catch (error) {
    return error;
  }
});

module.exports = holistics;
