# changelog_parser

Automatically updates your changelog by increasing the major, minor or patch version based on the newest release.

Expects the changelog to follow [keepachangelog.com](http://keepachangelog.com/) guidelines

## Install

```
npm install changelog_updater
```

## Usage

## Format

This module requires the changelog to be in markdown format.

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

## License

[MIT](LICENSE.md)
