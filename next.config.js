// next.config.js
const withPlugins = require("next-compose-plugins");
const withLess = require("next-with-less");

const plugins = [
  /* ...other plugins... */
  [
    withLess,
    {
      lessLoaderOptions: {
        /* ... */
      },
    },
  ],
  /* ...other plugins... */
];

module.exports = withPlugins(plugins, {
  /* ... */
});
