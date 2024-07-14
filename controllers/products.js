const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "Static product list" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ products: "get all products" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
