module.exports = {
  reactStrictMode: true,
};

const withReactEveryLayout = require("next-transpile-modules")([
  "react-every-layout",
]);

module.exports = withReactEveryLayout();
