# name-generator
[View deployed app](https://jlrzhen.github.io/name-generator/)

A web app that generates usernames based on a theme selected by the user.

This app is dependent on the [Datamuse API](https://www.datamuse.com/api/) and finds usernames by running queries with specific parameters.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
- Random Number: appends random four-digit number to end of each name
- Spacing: removes spaces between words of names that have a length of
two or more words
- Capitalization
  1. Capitalizes first letter of every word in each name
  2. camelCase
  3. No capitalization
- Change theme
  - Switches from dark (default) to light theme
