//const {} = require('../contollers/products')

const allProducts = async (req, res) => {
  
  console.log("allProducts");
}

const productId = async (req, res) => {
  const {id}= req.params;
  try {
    const product = await getproducts(id);
    res.status(200).json(product);
  }catch(error){
res.status (400).json({message: error.message});
  }
}

module.exports = {
  allProducts,
  productId
}