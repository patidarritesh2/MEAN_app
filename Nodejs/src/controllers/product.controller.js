const Product = require('../models/product.model');

exports.create = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
};

exports.getAll = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

exports.update = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
};

exports.delete = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};