module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};
