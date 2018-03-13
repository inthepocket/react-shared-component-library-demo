# React Native Web Component Library

This repository is an example/demo of how you would go about creating a component library that can be shared across React Native & React Web applications.
It uses react-native-web to create platform agnostic components that can be imported from symlinks / npm / private registry

- For RN apps this repo works out of the box since it uses regular RN components when importing components from this library.
- For React web applications you have to run `npm run build` first because these react-native-web components need to be transpiled to valid JS before it can be imported in your project
