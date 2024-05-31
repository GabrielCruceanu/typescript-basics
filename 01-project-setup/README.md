# Project Setup

1. Create a new directory for the project.
2. Run `npm init -y` to create a new `package.json` file.
3. Install TypeScript as a development dependency by running `npm install typescript --save-dev`.
4. Create a new `tsconfig.json` file by running `npx tsc --init`.
5. Update the `tsconfig.json` file with the following settings:
   ```json
   {
     "compilerOptions": {
       "target": "es2016",
       "module": "commonjs",
       "esModuleInterop": true,
       "forceConsistentCasingInFileNames": true,
       "strict": true,
       "skipLibCheck": true,
       "outDir": "./dist"
     }
   }
   ```
