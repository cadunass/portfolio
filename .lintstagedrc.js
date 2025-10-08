export default {
  // Run Biome check and format on staged files
  "*.{js,jsx,ts,tsx,json,css,md}": [
    "biome check --write --no-errors-on-unmatched",
  ],
};
