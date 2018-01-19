# Web Perf Toolbar
A component to visualize client performance on your site for the current page.

Shipped as a single JavaScript file with no runtime dependencies, this toolbar drops into your existing sites with a single script tag and barely any configuration. Designed to be injected into a page for developers or stakeholders

## Road Map

Note: This project follows semver and is pre-release. Until a 1.0 release, the public API may change.

## Getting Started

1. [Visual Studio Code](https://code.visualstudio.com/) is the recommended editor. We [have configured](./.vscode/extensions.json) recommended extensions for working with this project.
2. Install the npm dev dependencies. `npm install`
3. Run the demo: `npm run demo`

## Commands (`npm run ...`)

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

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

To get started, see [Adding To The Toolbar](./docs/adding-to-the-toolbar.md).

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
