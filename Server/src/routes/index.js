const { Router } = require("express");

const usersRoute= require("./usersRoute.js");
const productsRoute= require("./productsRoute.js");

const router = Router();

router.use("/user", usersRoute);
router.use("/products", productsRoute);

module.exports = Router();