# React Native: Unhandled TypeError: Cannot read properties of null (reading 'name')
This repository demonstrates a common error in React Native applications: attempting to access a state variable before it has been initialized, typically after an asynchronous operation such as fetching data from an API.  The example shows how to reproduce the error and provides a solution to handle this situation gracefully.

## Reproducing the Error
The `bug.js` file contains the buggy code.  Running this will trigger the `TypeError`. The error occurs because the component tries to render `<Text>{data.name}</Text>` before the `fetch` call in `useEffect` completes and sets the value of `data`. 

## Solution
The `bugSolution.js` file demonstrates how to resolve the issue by using optional chaining (`?.`) and nullish coalescing (`??`) to safely access the state variable. This prevents the error from occurring when `data` is still `null` or `undefined`.

## How to Run
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` (depending on your platform) to run the application.

Compare `bug.js` and `bugSolution.js` to understand the fix. 