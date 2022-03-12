import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'
const { paths } = compilerOptions

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'jest-preset-angular',
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: '<rootDir>',
  }),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
}
