module.exports = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")([
  "react-every-layout",
  "react-every-layout",
]);

module.exports = withTM();
