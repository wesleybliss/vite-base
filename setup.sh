#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const usage = `
USAGE ./${path.basename(process.argv[1])} <slug> <name>
`

let [slug, name] = process.argv.slice(2)

const hasSlug = slug && slug.length > 0
const hasName = name && name.length > 0

if (!hasSlug && !hasName) {
    console.info(usage)
    process.exit(1)
}

if (!hasSlug) {
    console.error('Project slug is required')
    console.info(usage)
    process.exit(2)
}

if (!hasName) {
    const words = slug.includes('-') ? slug.split('-') : [slug]
    name = words
        .map(it => it.substring(0, 1).toUpperCase() + it.substring(1))
        .join(' ')
}

const root = (...dirs) => path.resolve(__dirname, ...dirs)

const replace = target => {
    
    console.info('- Updating slug & name:', target)
    
    const data = fs.readFileSync(target, 'utf8')
        .replaceAll('vite-base', slug)
        .replaceAll('Vite Base', name)
    
    fs.writeFileSync(target, data, 'utf8')
    
}

const paths = [
    'package.json',
    'index.html',
    'README.md',
    'src/constants.js',
    'src/components/App/App.jsx',
    'src/routes/Home/Home.jsx',
    'sample.env',
    'public/manifest.json'
].map(it => root(it))

paths.forEach(replace)

console.info('- Creating .env file')
const envFile = root('.env')
const sampleEnvFile = paths.find(it => it.includes('sample.env'))
fs.copyFileSync(sampleEnvFile, envFile)

console.info('- Updating files & resetting Git')
if (fs.existsSync(root('.git'))) {
    fs.rmSync(root('.git'), { recursive: true })
    execSync('git init')
}

console.info('- Deleting this script')
fs.unlinkSync(root('setup.sh'))
