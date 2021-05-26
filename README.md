# Introduction

This project contains the UI components that are shared across multiple front end projects inside of farmer connect. The components are built with react and exposed in a Storybook page under ui.farmerconnect.com for easy visualization and usage instructions.

# Install

```
yarn add @farmerconnect/farmerconnect-ui
```

# Build and Test

It's recommended that you build and run it locally with Storybook:

```
yarn install
yarn storybook
```

Then access it in `http://localhost:6006`

# License

Check the [LICENSE](https://github.com/farmerconnect/farmerconnect-ui/blob/main/LICENSE) file

# Contribute

This project uses [Github flow](https://guides.github.com/introduction/flow/) and each main build is a release candidate.

To contribute:

1. Follow the UI patterns
2. Increase the version following [semver](https://semver.org/)
3. Open a PR (don't forget the tests!)
4. PR will go through review process and be merged to master by one of the core developers if approved
5. Successful master build will generate a release with your new version and publish a package to npm.
