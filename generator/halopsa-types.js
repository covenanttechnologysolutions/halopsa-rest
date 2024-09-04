const openapiTS = require('openapi-typescript')
const fs = require('fs')
const path = require('path')
const spec = require('./spec/swagger.json')

__dirname = path.resolve(path.dirname(''))
;(async () => {
  const types = await openapiTS(spec)
  fs.writeFileSync(path.join(__dirname, 'HaloPSATypes.ts'), types)
  fs.copyFileSync(
    path.join(__dirname, 'HaloPSATypes.ts'),
    path.join(__dirname, '../src/HaloPSATypes.ts'),
  )
  fs.rmSync(path.join(__dirname, 'HaloPSATypes.ts'))
  console.log('done')
})()
