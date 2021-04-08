const path = require("path");

module.exports = {
  bail: 1,
  verbose: true,
  testEnvironment: "jsdom",
  testURL: "https://jest.test",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  rootDir: path.resolve(__dirname, "../packages"),
  moduleFileExtensions: ["js", "ts"],
  collectCoverageFrom: [
    "<rootDir>/**/*.{js,ts}",
    "!<rootDir>/lib/**",
    "!**/__test__/**",
  ],
  snapshotSerializers: ["miniprogram-simulate/jest-snapshot-plugin"],
};
