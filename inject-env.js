const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()
const path = './build/env.js'
const content = `const REACT_APP_FIREBASE = ${process.env.REACT_APP_FIREBASE};`
fs.writeFileSync(path, content)
