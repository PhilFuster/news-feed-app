# news feed application

A simple news feed app using react. Highlighting the use of hooks like useEffect, useMemo, and useCallback.

This example project focuses on useEffect, useMemo, and useCallback.
Along with those hooks, it focuses on the idea of a dependency array which is a tool that helps determine  
when a React component should re-render. Without a dependency array useEffect will be triggered by any change in state and reRender
the component. The use of a dependency array says, when this property changes, reRender
the component and call this useEffect function. Basically links a useEffect to a specific state property.

useEffect works great when working with primitive values in state. What happens when state is represented by an array?  
Or an object? Deep dependency checking gets a little more complex at that time.  
Two arrays: [1, 2, 3] and [1, 2, 3], are different. Although their values are the same, they are two different instances  
of an array object. When using the aforementioned array instance as a dependencyArray for a useEffect hook, will cause the hook  
to always be called because on reRender the array instance is re-created. React will think it changed even though its values  
are still the same.

This is where useMemo comes into play. useMemo will cache the dependency passed to it. It will then check against that  
dependency when deciding whether to re-render or not. Since it is cached, the same values will not cause a re render.

useCallback is similar, except it memoizes function value for fn.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
