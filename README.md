# changelog_updater

Automatically updates your changelog by increasing the major, minor or patch version based on the newest release.

Expects the changelog to follow [keepachangelog.com](http://keepachangelog.com/) guidelines

## Install

```
npm install changelog_updater
```

## Usage
```js
// update the patch version e.g. 0.0.1 to 0.0.2
var changelog = updater.bumpPatch(changelogPath);

// update the minor version e.g. 0.1.1 to 0.2.0
var changelog = updater.bumpMinor(changelogPath);

// update the major version e.g. 1.1.1 to 2.0.0
var changelog = updater.bumpMajor(changelogPath);
```
## Format

This module requires the changelog to be in markdown format. The changelog that is being updated should always have a [x.y.z] version that is the **first** version after the title.

```md
## [x.y.z]

### Added

### Changed

### Fixed

### Removed
```

The title of the changelog is prefixed by **one** hashtag (#):
```md
# Example changelog
```

The versions are prefixed by **two** hashtags (##):
```md
## [2.9.0](http://www.google.fi/)
```

The change headers should be prefixed with **three** hashtags (###)
```md
### Added
```

Individual changes should be prefixed with **one** hyphen (-)
```md
- Created an amazing feature!
```

An example CHANGELOG.md file:

```md
# Example changelog

## [x.y.z]

### Added
- A changelog!

### Fixed
- UI had some terrible bugs

### Removed

### Changed

## [2.9.0](http://www.google.fi/)

### Added
- Added a cool new feature
- Files can now be loaded from the Internet

### Changed
- Localization IDs

### Fixed
- This annoying bug
- That annoying bug
- A bug that you had but no one else
- A bug that everyone had but not you
```

## Testing
```js
npm test
```
## License

[MIT](LICENSE.md)
