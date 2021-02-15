module.exports = {
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/out/',
    '<rootDir>/node_modules/'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!*.{js,jsx}',
    '!.next/**',
    '!out/**',
    '!mock/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**'
  ],
  bail: true
}
