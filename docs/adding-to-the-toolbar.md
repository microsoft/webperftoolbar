# Adding To The Toolbar

## Be Familiar With The Tech Stack

- Language: TypeScript
- Test Runner: Karma
- Assertion Library: Mocha
- Linter: tslint
- Packaging: Webpack

## Follow The Implicit Coding Guidelines

- The coding style should be pretty standard and enforced with tslint.
- Using VSCode with the recommended extensions exposes tslint violations at dev time so you aren't surprised when you build.
- Don't violate tslint rules without having a good reason and justify disabling rules for a line or block with a comment when you do.
- There is a high bar for disabling tslint rules globally through tslint.json.

TODO: Some rules are annoying formatting ones. We need to set up prettier and/or auto-fixing on save for tslint.

## Understand The Architecture

### Toolbar

- A `Toolbar` is constructed with a list of `IPanel` constructors and `IPanelConfig` configurations.

### Panels

- Panels extend from `IPanel`.
- Panels provide a list of `Button` objects displayed by the toolbar.
- Panels are rendered in a `PanelFrame` provided by the `Toolbar`.
- These panels are constructed with a configuration object that extends `IPanelConfig`.
- There should be a default configuration object with values for every configuration property. These default values should be used when 
- (Recommended) UI strings should be available in a panel's configuration so they can be overridden.

### Buttons

- Buttons are so basic their design is quite opinionated.
- Buttons have a simple visual: icon, text, and background color.
- Buttons toggle the display of the `PanelFrame` when they are clicked.
- Buttons are constructed with a configuration object that extends `IButtonConfiguration`.

## Create A New Panel

1. Create an interface for the panel configuration. Start simple, maybe just a string for the panel name.
2. Create a default configuration object.
3. Create the class for your panel.
    1. You probably want to duplicate the constructor from an existing panel.
    2. Determine what you want your button to show. Maybe just a smiley face and a random number at first.
    3. Determine what you want the panel to show. Start by setting the innerHTML of the DOM object that is passed in to the render function to something like the title you have in the config object.
4. Update `./src/index.ts` to include a reference to your panel. (Since we're a library and your panel isn't referenced, it won't be output since it isn't reachable. I wonder if this could be fixed with a config change, if it can, please send a PR.)
5. Update the Toolbar constructor configuration in `./index.html` to include references to your new panel and configuration.
6. Run the demo and see your toolbar! `npm run demo`

### What now? Share it!

If you are ready to share your panel with the world, add some tests then send a PR!

### Can't share?

If you have to keep your new panel private, don't worry. You don't have to maintain your own fork of this repository. As long as you have implemented the interfaces and your panel is loaded before you construct our toolbar, the code for your panel doesn't need to be built with this toolbar (or even be written in TypeScript). Just define the panel in your site's code and just reference it when constructing the toolbar.

We hope that by having a configurable design will make it easier to onboard this toolbar into your site since you won't need to maintain, build, and export a fork of this project into your site. If you have feedback about onboarding or the configurable design [please open an issue](https://github.com/Microsoft/webperftoolbar/issues/new) so we can discuss it.
