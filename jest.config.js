const { pathsToModuleNameMapper } = require('ts-jest')
const { paths } = require('./tsconfig.json').compilerOptions

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// const config = {
//   rootDir: '.',
//   preset: 'jest-preset-angular',
//   moduleNameMapper: {
//     ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
//     '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
//   },
//   // moduleNameMapper: {
//   //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//   //     '<rootDir>/__mocks__/fileMock.ts',
//   //   '\\.(html)$': '<rootDir>/__mocks__/fileMock.ts',
//   //   '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
//   // },
//   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
// }
// module.exports = config

module.exports = {
  preset: 'jest-preset-angular',
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}
