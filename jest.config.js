/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { getTypescriptPathAliases } = require('./webpack/utils/get-typescript-path-aliases');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-css',
    '^.+\\.(jpg|jpeg|png|gif|webp)$': 'jest-transform-file',
    '\\.svg$': 'svg-jest'
  },
  testMatch: ['**/__tests__/**/*.spec.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(ico|eot|otf|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(styl|less|sass|scss)$': 'identity-obj-proxy',
    '\\.svg$': 'svg-jest',
    ...getTypescriptPathAliases('jest', '<rootDir>/', false)
  },
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: ['.interface.ts', 'index.ts', '.mock.ts', '.d.ts'],
  coverageReporters: ['json', 'lcov', ['text', { skipFull: true }]],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1
    }
  },
  automock: false,
  bail: 1
};
