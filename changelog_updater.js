/* jslint node: true */
'use strict';

var parser = require('changelog_parser');

exports.bumpPatch = function (pathToChangelog) {
    var json_changelog = parser.toJSON(pathToChangelog);  
    var snapshotVersion = json_changelog.versions[0];
    var latestReleaseVersion = json_changelog.versions[1];
    var version_numbers = latestReleaseVersion.version_number.split('.');
    var newVersion = version_numbers[0] + '.' + version_numbers[1] + '.' + (parseInt(version_numbers[2]) + 1);

    snapshotVersion.version_number = newVersion;
    snapshotVersion.version = snapshotVersion.version.replace(/[a-zA-Z].[a-zA-Z].[a-zA-Z]/, newVersion);

    removeEmptyChangeBlocks(snapshotVersion);

    json_changelog.versions.unshift(generateSkeleton());

    return parser.toChangelog(json_changelog);
};

exports.bumpMinor = function (pathToChangelog) {
    var json_changelog = parser.toJSON(pathToChangelog);  
    var snapshotVersion = json_changelog.versions[0];
    var latestReleaseVersion = json_changelog.versions[1];
    var version_numbers = latestReleaseVersion.version_number.split('.');
    var newVersion = version_numbers[0] + '.' + (parseInt(version_numbers[1]) + 1) + '.' + 0;

    snapshotVersion.version_number = newVersion;
    snapshotVersion.version = snapshotVersion.version.replace(/[a-zA-Z].[a-zA-Z].[a-zA-Z]/, newVersion);

    removeEmptyChangeBlocks(snapshotVersion);

    json_changelog.versions.unshift(generateSkeleton());

    return parser.toChangelog(json_changelog);
};

exports.bumpMajor = function pathToChangelog(pathToChangelog) {
    var json_changelog = parser.toJSON(pathToChangelog);  
    var snapshotVersion = json_changelog.versions[0];
    var latestReleaseVersion = json_changelog.versions[1];
    var version_numbers = latestReleaseVersion.version_number.split('.');
    var newVersion = (parseInt(version_numbers[0]) + 1) + '.' + 0 + '.' + 0;

    snapshotVersion.version_number = newVersion;
    snapshotVersion.version = snapshotVersion.version.replace(/[a-zA-Z].[a-zA-Z].[a-zA-Z]/, newVersion);

    removeEmptyChangeBlocks(snapshotVersion);
    
    json_changelog.versions.unshift(generateSkeleton());

    return parser.toChangelog(json_changelog);
};

function removeEmptyChangeBlocks(snapshotVersion) {
    var i;
    var elementsToRemove = [];

    for (i = 0; i < snapshotVersion.changes.length; ++i) {
        if (snapshotVersion.changes[i].items.length === 0) {
            elementsToRemove.push(i);
        }
    }

    while (elementsToRemove.length) {
        snapshotVersion.changes.splice(elementsToRemove.pop(), 1);
    }
}

function generateSkeleton() {
    return {
        version_number: 'x.y.z',
        version: '## [x.y.z]',
        changes: [
            {
                change: '### Added',
                items: []
            },
            {
                change: '### Fixed',
                items: []
            },
            {
                change: '### Changed',
                items: []
            },
            {
                change: '### Removed',
                items: []
            }
        ]
    }
}
