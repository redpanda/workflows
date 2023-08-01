import fs from 'fs'
import YAML from 'yaml'

const file = process.argv[2];

const data = fs.readFileSync(file, 'utf8')
const obj = JSON.parse(data)

// print YAML
console.log(YAML.stringify(obj))
