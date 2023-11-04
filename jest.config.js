/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
   // true to collect stats
   collectCoverage: false,
   coverageDirectory: "coverage",
   coverageProvider: "v8",
};