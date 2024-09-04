const fs = require('fs')
const path = require('path')
const { ESLint } = require('eslint')
const { generateAPIClass } = require('./generator.js')
const spec = require('./spec/swagger.json')

const eslint = new ESLint({ fix: true })

async function generate() {
  const {
    paths,
    components: { schemas },
  } = spec

  const tempFolder = path.join(__dirname, 'temp')
  const sections = {}

  // generate temp directory
  if (!fs.existsSync(tempFolder)) {
    fs.mkdirSync(tempFolder)
  }

  Object.keys(paths).forEach((url) => {
    const methods = paths[url]
    const [_, section, ...rest] = url.split('/')

    if (!sections[section]) {
      sections[section] = []
    }

    sections[section].push({ url, methods })
  })

  for (const section of Object.keys(sections)) {
    const apiName = section.charAt(0).toUpperCase() + section.slice(1)
    const operations = sections[section]
    const file = generateAPIClass({ apiName, operations })
    const fileName = path.join(tempFolder, `${apiName}API.ts`)
    if (fs.existsSync(fileName)) {
      fs.rmSync(fileName)
    }
    console.log('Creating file', fileName)
    fs.writeFileSync(fileName, file)
  }

  console.log('copying files to src/')
  const files = fs.readdirSync(tempFolder)
  files.forEach((file) => {
    const destFolder = path.join(__dirname, '../src', 'HaloPSA')
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder)
    }
    const src = path.join(tempFolder, file)
    const dest = path.join(destFolder, file)
    console.log(`${src} ==> ${dest}`)
    fs.copyFileSync(src, dest)
  })

  // files.forEach(file => {
  //   const fileName = file.replaceAll('.ts', '')
  //   //   import { ActionsAPI } from './HaloPSA/ActionsAPI'
  //   console.log(`import { ${fileName} } from './HaloPSA/${fileName}.ts'`)
  // })
  // files.forEach(file => {
  //   const fileName = file.replaceAll('.ts', '')
  //   //   import type * as ActionsAPITypes from './HaloPSA/ActionsAPI'
  //   console.log(`import type * as ${fileName}Types from './HaloPSA/${fileName}.ts'`)
  // })
  // files.forEach(file => {
  //   const fileName = file.replaceAll('.ts', '')
  //   //   CompanyAPI: CompanyAPI
  //   console.log(`${fileName}: ${fileName}`)
  // })
  // files.forEach(file => {
  //   const fileName = file.replaceAll('.ts', '')
  //   //    this.CompanyAPI = new CompanyAPI(options)
  //   console.log(`this.${fileName} = new ${fileName}(options)`)
  // })
  // files.forEach(file => {
  //   const fileName = file.replaceAll('.ts', '')
  //   // CompanyAPITypes,
  //   console.log(`${fileName}Types,`)
  // })
  fs.rmSync(tempFolder, { recursive: true })
  console.log('temp folder removed')

  console.log('running eslint')
  const results = await eslint.lintFiles(['src/HaloPSA/*.ts'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)
}

console.log('generating static client files')
generate().then(() => console.log('done'))
