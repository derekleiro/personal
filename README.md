# Personal website

This project is meant to showcase my skills, abilities and projects.

## Structure

The main entry point for the App is `App.js` in the source folder. The structure is as follows: `src/pages` includes all the routes within the app. Each page has a `centerStage` which combines all the components that is rendered on the page. Each page combines this centerStage component with a set of Meta tags for SEO optimizations to make up the full page.

If components are shared by more than one page, they are stored in the `src/components` where they are reused by any interested page.

Assets are stored in the `src/assets` folder. Constants such as animation settings or the site's colour pallete is stored in the `src/constants` folder.

All redux and the App's data store is all done in the `src/store` folder.

## Running Locally

In the project's main directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Note:

All none-crucial components are deferred. Only the `Home.jsx` component mounts on load up with the rest lazy loaded as needed. Once loaded, a service worker caches all the files using the `workbox` script running `workbox-config.js` everytime you `npm build` the project. This is important to maintain the website's load up speed of < 1 second and web best practices.
