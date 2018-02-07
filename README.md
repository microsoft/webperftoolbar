# Web Perf Toolbar
A component to visualize client performance on your site for the current page.

Shipped as a single JavaScript file with no runtime dependencies, this toolbar drops into your existing sites with a single script tag and barely any configuration. Designed to be injected into a page so developers or stakeholders can evaluate the performance of the page as they use it.

## Getting Started

1. You'll need Node and NPM.
2. [Visual Studio Code](https://code.visualstudio.com/) is the recommended editor. We [have configured](./.vscode/extensions.json) recommended extensions for working with this project.
3. Install the npm dev dependencies. `npm install`
4. Run the demo: `npm run demo`

## Road Map

Note: This project follows semver and is pre-release. Until a 1.0 release, the public API may change. See "Releasing" below.

### Alpha
- [x] General toolbar structure (Toolbar, PanelFrame, Panel, Button)
- [x] Expose Navigation timings
  - Shows key points in the page load.
- [x] Expose Resource timings
  - Shows how big files loaded are, including bytes over wire and time to first byte.
- [ ] Expose User timings (expected version: 0.2.0-alpha)
  - List all marks (name, start time, duration of 0) sorted by start time ascending.
  - List all measures (name, start time, duration between two marks) sorted by start time ascending.
- [ ] Continuous integration

Shipping all of these moves from -alpha to -beta.

### Beta
- [ ] Add a way for panels/buttons to update their contents periodically.
- [ ] Expose Custom Metrics with Goals (expected version: 0.3.0-beta)
  - This is a specific renderer for measures that takes in a configuration object. The object defines names of custom goals, a warning goal value, a target goal value, and a getter that resolves the value to be compared against the goal. If the warning goal value is less than the target goal value, it is assumed the value should be less than the target. If the warning value is higher than the target value, it is assumed the value should be greater than the target. For example, if the warning is 80 and the target is 100, we assume smaller numbers are better. This allows people deploying the toolbar to configure a very custom panel without writing a full panel.
- [ ] Automation that detects changes in the public API to prevent regressions.

Shipping all of these exits beta and bumps the major version to 1.0.0.

### Beyond 1.0
We welcome contributions. See "Contributing" below. Think you have a great idea for a panel? Open an issue to discuss it. Built one already? Send a PR.

That said, here are some goals for this project:
- We ship a single JavaScript file.
  - It must be painless for developers to integrate the toolbar. A mess of CSS, JS, or server side configuration gets messy. Keep it simple.
- We are a client performance toolbar.
  - We don't collect or visualize server-side metrics that are exposed somehow though you could use the Custom Metrics pane to get at your server metrics, but that lives in the user's config and not in this repository.
- We focus on the currently loaded page.
  - We don't try to persist and visualize info about previous loads.
- We aren't a generic dev tools toolbar.
  - Don't build a cookie editor panel, do build a panel that shows the size of cookies and local storage.

## Dev Commands (`npm run ...`)

### Main Commands
- `demo` Builds then launches a page with a demo of the toolbar.
- `build` Kicks off a Webpack production build.
- `test` Builds then launches a test runner in IE and Chrome that watches for changes.
- `check` Compiles, lints, and tests everything. **This command must be run and the output must be clean before checking in.**

### Source Commands
- `tslint` Run tslint on the toolbar sources.
- `tsc` Compile the toolbar TypeScript sources directly (no Webpack).
- `tsc-verbose` Same as above, but verbose compiler.

### Test commands
- `test-once` Builds then launches a single test run.
- `test-tslint` Runs tslint on the test sources.
- `test-tsc` Compiles the test TypeScript sources directly (no Webpack/Karma).
- `test-tsc-verbose` Same as above, but verbose compiler.
## Maintainers
- @AdamTReineke (Admin, primary contact)
- @JoshuaKGoldberg (Admin)
- Dadstart (Admin)

## Releasing
This project follows the [semver](https://semver.org/) versioning convention of major.minor.patch.

- Changing the [public API](./src/toolbar.ts) will bump the **major** version.
- Adding a whole new panel, changing/removing a panel configuration, or adding significant panel features will bump the **minor** version.
- Bug fixes or minor tweak to a panel, including adding new optional panel configurations, will bump the **patch** version.

0. Figure out what the new version number will be.
0. If leaving `0.1.0-alpha`, update the Security notice below and remove this line.
1. From `develop` branch, create a new branch for the release: `git checkout -b release-vxx.xx.xx`
2. `npm run check` should be clean.
3. Verify the [demo](./index.html) was updated to show any new panels.
4. `npm run demo` should show the different panels in the toolbar.
5. Bump the version in [package.json](./package.json).
6. Update the road map in this file to address completed work.
7. Make then merge a pull request from the new branch to `master`.
8. Tag with the new version number. `git tag vxx.xx.xx; git push --tags`
9. Push to NPM. *TODO: What are the steps?*

There is not a regular release schedule.

## Reporting Security Issues

**DURING ALPHA ONLY**: Open a new issue so we can address the issue before leaving alpha. Once this project leaves alpha, the default Microsoft Security message below should be unstruck and followed.

~~Security issues and bugs should be reported privately, via email, to the Microsoft Security
Response Center (MSRC) at [secure@microsoft.com](mailto:secure@microsoft.com). You should
receive a response within 24 hours. If for some reason you do not, please follow up via
email to ensure we received your original message. Further information, including the
[MSRC PGP](https://technet.microsoft.com/en-us/security/dn606155) key, can be found in
the [Security TechCenter](https://technet.microsoft.com/en-us/security/default).~~
