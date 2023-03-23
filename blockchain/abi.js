const fs = require('fs')
const path = require('path')

const { abi } = require('../build/artifacts/contracts/Contract.sol/Contract.json')

fs.writeFileSync(
    path.join(__dirname, '../abi/Contract.json'),
    JSON.stringify(abi)
)