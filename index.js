const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const resolveSpaRoutes = (req, res, next) => {
  const isStatic = req.url.search(/\..*$/) > -1
  if (!isStatic) {
    res.sendFile('index.html', { root: 'build' })
    return
  }
  return next()
}

app.use(resolveSpaRoutes)
app.use(express.static('./build'))
app.listen(Number(process.env.PORT) || 3000)
