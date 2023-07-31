const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");
const app = express();
app.use(express.json());
app.use(cors()); //test it
app.post("/register", async (req, resp) => {
  let data = new User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password;
  console.log(req.body);
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "No user found" });
  }
});

app.post("/add-product", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products", async (req, resp) => {
  try {
    console.log("Request received");
    let products = await Product.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "No results found" });
    }
  } catch (error) {
    resp.status(500).send({ error: "Internal server error" });
  }
});

app.listen(5000);
