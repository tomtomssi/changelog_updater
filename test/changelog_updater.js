var should = require('chai').should();
var updater = require('../changelog_updater');
var expect = require('chai').expect;

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
});