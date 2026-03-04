const express = require("express")
const bcrypt = require("bcrypt")

const app = express()

app.get("/", (req, res) => {
  // res.send("working")

  // bcrypt.genSalt(10, function (err, salt) {
  //   bcrypt.hash("Shaswat", salt, function (err, hash) {
  //     console.log(hash)
  //   })
  // })

  bcrypt.compare("Shaswat", "$2b$10$t6uYeRuCatXV89JD25VlhOKOS9VfcCMNIGKpbAuHUhXeHcEgqR5Qi", function (err, result) {
    if (result) {
      res.send("Password is correct")
    } else {
      res.send("Password is incorrect")
    }
  })
})

app.listen(3000, () => console.log("Server running on port 3000"))