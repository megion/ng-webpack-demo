// import { pathsToModuleNameMapper } from 'ts-jest/utils'
// import { compilerOptions } from './tsconfig.json'
// const { paths } = compilerOptions

// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// export default {
//   preset: 'jest-preset-angular',
//   moduleNameMapper: pathsToModuleNameMapper(paths, {
//     prefix: '<rootDir>',
//   }),
//   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
// }

// import config from '../../jest/jest.config'
// export default { ...config }

// import type { Config } from '@jest/types'
import type { InitialOptionsTsJest } from 'ts-jest'
// import { defaults as tsjPreset } from 'ts-jest/presets'
import tsPreset from 'ts-jest/jest-preset'
import angularPreset from 'jest-preset-angular/jest-preset'
import merge from 'merge'

// import { defaultsESM as tsjPreset } from 'ts-jest/presets'
// import { jsWithTs as tsjPreset } from 'ts-jest/presets'
// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'
// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'
// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'
//
//
// const config: InitialOptionsTsJest = merge.recursive(tsPreset, angularPreset, {
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//       '<rootDir>/__mocks__/fileMock.ts',
//     '\\.(html)$': '<rootDir>/__mocks__/fileMock.ts',
//     '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
//   },
// })

const config: InitialOptionsTsJest = {
  // ...tsPreset,
  ...angularPreset,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '\\.(html)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
  },
}

// const config: InitialOptionsTsJest = {
//   rootDir: '.',
//   preset: 'jest-preset-angular',
//   moduleNameMapper: {
//     '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//       '<rootDir>/__mocks__/fileMock.ts',
//     '\\.(html)$': '<rootDir>/__mocks__/fileMock.ts',
//     '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
//   },
//   transform: tsjPreset.transform,
// }

console.dir(config, { depth: null })

// const config: Config.InitialOptions = {
//   maxWorkers: 3,
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   // globals: {},
// }
export default config
