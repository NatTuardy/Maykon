const path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "build"),
  },
};
