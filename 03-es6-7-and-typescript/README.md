# Webpack Typescript

This repository contains notes, examples, and exercises for learning Webpack TypeScript configuration.

1. Create a new directory for the project.
2. Run `npm init -y` to create a new `package.json` file.
3. Install TypeScript as a development dependency by running `npm install typescript --save-dev`.
4. Install Webpack and Webpack CLI as development dependencies by running `npm install webpack webpack-dev-server --save-dev`.
5. Install TypeScript loader for Webpack as a development dependency by running `npm install awesome-typescript-loader --save-dev`.
6. Create a new `webpack.config.js` file in the root of the project directory.
7. Update the `webpack.config.js` file with the following settings:
   ```javascript
   module.exports = {
     entry: "./src/app.ts",
     output: {
       filename: "app.js",
       path: __dirname + "./dist",
     },
     resolve: {
       extensions: [".ts", ".js"],
     },
     module: {
       rules: [
         {
           test: /\.ts$/,
           use: "awesome-typescript-loader",
           exclude: /node_modules/,
         },
       ],
     },
     devServer: {
       port: 3000,
     },
   };
   ```
