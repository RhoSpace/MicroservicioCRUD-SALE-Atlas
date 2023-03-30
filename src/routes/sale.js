const express = require("express");
const saleSchema = require("../models/sale");

const router = express.Router();

//create
router.post("/sales", (req, res) => {
  const sale = saleSchema(req.body);
  sale
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//find All
router.get("/sales", (req, res) => {
  saleSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//find by Id
router.get("/sales/:id", (req, res) => {
  const { id } = req.params;
  saleSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete
router.delete("/sales/:id", (req, res) => {
  const { id } = req.params;
  saleSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update
router.put("/sales/:id", (req, res) => {
  const { id } = req.params;
  const { productId, productType, saleAmount, seller } = req.body;
  saleSchema
    .updateOne({ _id: id }, { $set: { productId, productType, saleAmount, seller  } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
