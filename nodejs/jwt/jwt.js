const jwt = require("jsonwebtoken");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  //using cookie parser to parse the cookie me jo bheja hua data hai use acces karne ke liye
  const token = jwt.sign({ name: "shaswat", email: "[EMAIL_ADDRESS]" }, "secret"); //secret is the key to sign the token we have to keep it secret not in this 
  res.cookie("token", token);
  res.send("Token created");
});

// app.get("/read", (req, res) => {
//   // console.log(req.cookies.token)
//   const data = jwt.verify(req.cookies.token, "secret");
//   console.log(data)

// });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});