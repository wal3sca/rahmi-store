const db = require("../db/dbConfig");

// Gets All Info from Holistics Table (Seed.sql)
const getAllProducts = async () => {
  try {
    const holistics = db.any("SELECT * FROM holistics");
    return holistics;
  } catch (error) {
    return error;
  }
};

const getOneProduct = async (id) => {
  try {
    const holistic = await db.one("SELECT * FROM holistics WHERE id=$1", id);

    return holistic;
  } catch (error) {
    return error;
  }
};

const addProduct = async (newProduct) => {
  try {
    const holistics = await db.any(
      "INSERT INTO holistics (name, description, price, rating, featured) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        newProduct.name,
        newProduct.description,
        newProduct.price,
        newProduct.rating,
        newProduct.featured,
      ]
    );
    return holistics;
  } catch (error) {
    return error;
  }
};

const deleteProduct = async (id) => {
  try {
    const holistic = await db.one(
      "DELETE FROM holistics WHERE id=$1 RETURNING *",
      id
    );

    return holistic;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateProduct = async (holistic, id) => {
  const query =
    "UPDATE holistics SET name=$1, description=$2, price=$3, rating=$4, featured=$5 WHERE id=$6 RETURNING *";
  const values = [
    holistic.name,
    holistic.description,
    holistic.price,
    holistic.rating,
    holistic.featured,
    id,
  ];
  const updated = await db.one(query, values);

  return updated;
};

module.exports = {
  getAllProducts,
  addProduct,
  getOneProduct,
  deleteProduct,
  updateProduct,
};
