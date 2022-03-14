const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { paths } = require('./tsconfig.json').compilerOptions

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
  preset: 'jest-preset-angular',
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}
module.exports = config
