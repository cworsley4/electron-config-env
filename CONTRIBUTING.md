# Checkout Project

```bash
git clone https://github.com/1amGr00t/electron-config-env
cd electron-config-env
npm install
```

Edit stuff and run _npm test_.

# Publish a new version

Edit _package.json_ [version number](http://semver.org). Then git tag and npm publish from shell:

```bash
npm login
npm version <update_type> -m "<message>"
```

where <update_type> is one of the [semantic versioning](http://semver.org) release types: patch, minor, or major.

_Example:_
```bash
npm version patch -m "Version %s - did some stuff"
```
%s = the new version number.

This command will bump the version number in package.json, add a new commit, and tag it with this release number.

Last step is push to git and publish the new version to npm. 
```bash
git push --tags
npm publish
```