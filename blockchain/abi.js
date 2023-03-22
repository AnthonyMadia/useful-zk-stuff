const fs = require('fs')
const path = require('path')

const ABI = require('../build/artifacts/contracts/Contract.sol/Contract.json')
ABI.bytecode = ''
ABI.deployedBytecode = ''

fs.writeFileSync(
    path.join(__dirname, '../abi/Contract.json'),
    JSON.stringify(ABI)
)