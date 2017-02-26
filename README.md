# Starter project with TypeScript

## Usage
Install dependencies

```
npm i
```
In development (webpack dev server)
```
npm run dev
```
Test (Karma + PhantomJS)
```
npm run test
```
Lint (tsLint)
```
npm run lint
```
Build (Webpack or Rollup)
```
npm run build
npm run build:webpack
```


## Memento (Steps)

### 1. Create package.json
```
npm init -f
```

### 2. TypeScript 

```
npm i awesome-typescript-loader typescript -D
```

### 3. React

```
npm i react react-dom react-router -S
```

types
```
npm i @types/react @types/react-dom @types/react-router -D
```

### 4. Create "tsConfig.json"
```
tsc --init
```
add jsx

### 5. Create "src" and "dist" directories
with "src/main.ts"

### 6. Test
Mocha
```
npm i chai mocha -D
```
types
```
npm i @types/chai @types/mocha -D
```
Jasmine
TODO

### 7. Karma
Create "karma.conf.js"
```
karma init
```
With Mocha
```
npm i  karma-mocha karma-phantomjs-launcher karma-webpack -D
```

singleRun .. true

### 8. Webpack
```
npm i  webpack webpack-dev-server -D
```

webpack.config.js : add tsx extension + loader

### 9. NPM Scripts
```
npm i cross-env -D
```
In development
```
npm run dev
```
Test
```
npm run test
```
Lint
```
npm run lint
```

### 10. Build
Rollup
```
npm i rollup rollup-plugin-typescript uglify-js -D
```
Create directory "build" with rollup configuration


### 11. Editor config

Create file ".editorconfig"

http://editorconfig.org/ 

Editor : Visual Studio Code

### 12. tsLint
```
npm i tslint -D
```
Create "tslint.json"
```
tslint --init
```
+ extension: tsLint for Visual Studio Code

### 13. CI
Travis

Create ".travis.yml"

### 14. LICENSE MIT

### 15. gitignore

