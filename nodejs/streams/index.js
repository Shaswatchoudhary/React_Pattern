const express = require("express")
const fs = require("fs")
const zlib = require('zlib')
const status = require('express-status-monitor')

const app = express()
const PORT = 8000


app.use(status())
//if we have to zip the file in optimise way so we use in built library for that i.e zlib

//stream read (sample.txt) --> zipper --> fs write stream
fs.createReadStream("./sample.txt").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
)
//buffer 
const buffer = Buffer.from('./sample.txt', 'utf-8')
console.log(buffer.toString()) // hexa decimal notation

app.get("/", (req, res) => {
  const stream = fs.createReadStream('./sample.txt', 'utf-8')
  stream.on('data', (chunk) => {
    res.write(chunk)
  })
  stream.on('end', () => {
    res.end()
  })
  stream.on('error', (err) => {
    console.log(err)
    res.end('Something went wrong')
  })
})

app.listen(PORT, () => {
  console.log(`App is running  http://localhost:${PORT}`)
})
