#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const usage = `
USAGE ./${path.basename(process.argv[1])} <slug> <name>
`

const [slug, name] = process.argv.slice(2)

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
    console.error('Project name is required')
    console.info(usage)
    process.exit(2)
}

const root = (...dirs) => path.resolve(__dirname, ...dirs)

const read = file => fs.readFileSync(file, 'utf8')

const write = (file, data) => fs.writeFileSync(file, data, 'utf8')

const paths = {
    me: root('setup.sh'),
    pkg: root('package.json'),
    html: root('index.html'),
    readme: root('README.md'),
    app: root('src/components/App/App.jsx'),
    env: root('.env'),
    sampleEnv: root('sample.env'),
}

const pkg = read(paths.pkg).replace('vite-base', slug)
const html = read(paths.html).replace('Vite Base', name)
const readme = read(paths.readme).replace('vite-base', slug)
const app = read(paths.app).replace('Vite Base', name)
const sampleEnv = read(paths.sampleEnv).replace('Vite Base', name)

write(paths.pkg, pkg)
write(paths.html, html)
write(paths.readme, readme)
write(paths.app, app)
write(paths.sampleEnv, sampleEnv)

fs.copyFileSync(paths.sampleEnv, paths.env)

if (fs.existsSync(root('.git'))) {
    fs.rmSync(root('.git'), { recursive: true })
    execSync('git init')
}

console.info('Updated files & reset Git. Deleting this script')

fs.unlinkSync(paths.me)
