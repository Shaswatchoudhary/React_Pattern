const cluster = require("node:cluster")
const os = require("os")
const express = require("express")


const totalCpu = os.cpus().length
// console.log(totalCpu)

if (cluster.isPrimary) {
  for (let i = 0; i < totalCpu; i++) {

    cluster.fork();
  }

}
else {
  const app = express()
  const PORT = 3000

  app.get("/", (req, res) => {
    return res.json({ message: `hello from Express ${process.pid}` })
  })
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
  })
}







