# Schematics for View and Container components

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Usage
Make `npm link /path/to/schematic` in you project. After that you are able to call next CLI commands:
`ng g ui-schema:view --name`
`ng g ui-schema:container --name`

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
