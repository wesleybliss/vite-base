const path = require('path')
const { writeJsconfig } = require('./jsconfig')

const initialAliases = {
    '@': path.resolve(__dirname, '../src'),
}

const aliases = [
    'styles',
    'lib',
    'store',
    'actions',
    'hooks',
    'routes',
    'components',
    'constants',
    'assets',
    'workers',
    'messages',
].reduce((acc, it) => ({
    ...acc,
    [`@${it}`]: path.resolve(__dirname, '../src', it),
}), initialAliases)

writeJsconfig(
    ['src', aliases],
)

module.exports = aliases
