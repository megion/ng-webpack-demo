import type { Config } from '@jest/types'
import 'jest-preset-angular/setup-jest'

const config: Config.InitialOptions = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  // preset: 'jest-preset-angular',
  preset: 'jest-preset-angular/presets/defaults-esm',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  // transform: {
  //   '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  // },
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__mocks__/fileMock.ts',
  //   '\\.(html)$': '<rootDir>/__mocks__/fileMock.ts',
  //   '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
  // },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      useESM: true,
    },
  },
}
// export default config
module.exports = config
