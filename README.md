# Log File Parser

## Description
This project is a simple **log file parser** built with JavaScript to extract valuable insights from server log data. It allows users to parse log files and retrieve information such as:
- The number of unique IP addresses.
- The top 3 most visited URLs.
- The top 3 most active IP addresses.

The project includes a UI where users can upload log files, and it parses them to display results.

1. The parsing logic is implemented in **`src/utils/parseLogFile.js`**.
2. Tests are provided in **`src/__tests__/parseLogFile.test.js`**.
3. Try it out with the UI on the [live demo](https://log-parser-app-nu.vercel.app/).
4. Set up the UI on localhost by following the instructions below.

## Getting Started

First, clone the repository and navigate to the project directory.

Install the dependencies:

```bash
npm install
# or
yarn install
```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Running Tests

To run the tests and validate the log parsing functionality:

```bash
npm run test
# or
yarn test
```
