const path = require("path");
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
          alias: {
            // For development, we want to alias the library to the source
            "expo-custom-module": path.join(__dirname, "packages", "expo-custom-module", "src", "index.ts"),
          },
        }
      ]
    ],
  };
};
