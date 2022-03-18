const path = require('path')

const initialAliases = {
    '@': path.resolve(__dirname, '../src'),
}

const aliases = [
    'styles',
    'lib',
    'store',
    'actions',
    'routes',
    'components',
    'constants',
    'assets',
    'effects',
    'workers',
    'messages',
].reduce((acc, it) => ({
    ...acc,
    [`@${it}`]: path.resolve(__dirname, '../src', it),
}), initialAliases)

module.exports = aliases
