const fs = require("fs");
const path = require("path");

// move README.md to dist
const readmePath = path.resolve(__dirname, "./README.md");
const readmeDistPath = path.resolve(__dirname, "./dist/README.md");
fs.copyFileSync(readmePath, readmeDistPath);
console.log("✅ README.md moved to dist");

// Read the existing package.json
const packageJsonPath = path.resolve(__dirname, "./package.json");
const packageJson = require(packageJsonPath);

// Only keep the necessary fields for the dist package.json
const distPackageJson = {
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  keywords: packageJson.keywords || [],
  main: "",
  types: "index.d.ts",
  exports: packageJson.exports || {},
  dependencies: packageJson.dependencies || {},
  devDependencies: packageJson.devDependencies || {},
  author: packageJson.author,
  license: packageJson.license,
  repository: packageJson.repository,
  homepage: packageJson.homepage,
  bugs: packageJson.bugs,
  funding: packageJson.funding,
};

// Write the new package.json to the dist folder
const distPath = path.resolve(__dirname, "./dist/package.json");
fs.writeFileSync(distPath, JSON.stringify(distPackageJson, null, 2), "utf-8");
console.log("✅ package.json generated");
