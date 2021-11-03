export function createProduct(req, res, next) {
  console.log("create product");
  next();
}

export function addProduct(req, res, next) {
  return res.send("add product");
}
