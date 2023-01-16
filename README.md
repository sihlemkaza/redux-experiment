# Redux Experiment

[Demo Url](https://sihlemkaza.github.io/redux-experiment/)

This project was created to test the use of redux for ui state management.

RGBA (Red, Green, Blue, Alpha) color values are stored in the redux store and are updated and retrieved by multiple components.

## Project Structure

```
  .
  ├── public                  
  ├── src
  │   ├── components     # UI components
  │   ├── redux          # redux state slice
  │   ├── util           # helper functions
  │   └── App.js
  │   └── index.js       # redux store 
```            

## Redux Dependencies Used

- [Redux](https://www.npmjs.com/package/redux)
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [React Redux](https://www.npmjs.com/package/react-redux)

## Running the code

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploying to GitHub-Pages

Update the `homepage` property in the package.json file to this format: `https://{username}.github.io/redux-experiment` where username is your github username.

```
  npm run deploy
```
This will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.

Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

[More deployment steps](https://github.com/gitname/react-gh-pages#readme)

