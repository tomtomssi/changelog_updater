var should = require('chai').should();
var updater = require('../changelog_updater');
var parser = require('changelog_parser');
var expect = require('chai').expect;
var fs = require('fs');

describe('#updater', function () {
  var changelogPath = './test/TESTLOG.md';

  it('changelog is defined after bumping the patch version', function () {
    var changelog = updater.bumpPatch(changelogPath);

    expect(changelog).to.be.ok;
  });

  it('changelog is defined after bumping the minor version', function () {
    var changelog = updater.bumpMinor(changelogPath);

    expect(changelog).to.be.ok;
  });

  it('changelog is defined after bumping the major version', function () {
    var changelog = updater.bumpMajor(changelogPath);

    expect(changelog).to.be.ok;
  });

  it('when bumping the patch version it should be reflected in the changelog', function () {
    var json_changelog = parser.toJSON(changelogPath);
    var new_changelog;
    var new_json_changelog;

    expect(json_changelog.versions[0].version_number).to.equal('x.y.z');
    expect(json_changelog.versions[1].version_number).to.equal('0.1.0');

    new_changelog = updater.bumpPatch(changelogPath);
    new_json_changelog = parser.toJSONFromString(new_changelog);

    expect(new_json_changelog.versions[1].version_number).to.equal('0.1.1');    
  });

  it('when bumping the minor version it should be reflected in the changelog', function () {
    var json_changelog = parser.toJSON(changelogPath);
    var new_changelog;
    var new_json_changelog;

    new_changelog = updater.bumpMinor(changelogPath);
    new_json_changelog = parser.toJSONFromString(new_changelog);

    expect(json_changelog.versions[0].version_number).to.equal('x.y.z');
    expect(json_changelog.versions[1].version_number).to.equal('0.1.0');

    expect(new_json_changelog.versions[1].version_number).to.equal('0.2.0');    
  });

  it('when bumping the major version it should be reflected in the changelog', function () {
    var json_changelog = parser.toJSON(changelogPath);
    var new_changelog;
    var new_json_changelog;

    new_changelog = updater.bumpMajor(changelogPath);
    new_json_changelog = parser.toJSONFromString(new_changelog);

    expect(json_changelog.versions[0].version_number).to.equal('x.y.z');
    expect(json_changelog.versions[1].version_number).to.equal('0.1.0');
    
    expect(new_json_changelog.versions[1].version_number).to.equal('1.0.0');
  });
});