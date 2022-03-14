const jestCfg = require('./jest.config').default

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...jestCfg,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: true,
    },
  },
}
