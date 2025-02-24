module.exports = {
    transformIgnorePatterns: [
      "node_modules/(?!axios)" // Allow Jest to transform axios
    ],
    moduleNameMapper: {
      "\\.(scss|css|jpg|png)$": "src/jest.mock.js",
      "^axios$": "src/__mocks__/axios.js" // Mock axios
      // Mock static assets
    },
    testEnvironment: "jsdom"
  };