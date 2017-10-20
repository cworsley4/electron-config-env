# Checkout Project

```bash
git clone https://github.com/1amGr00t/electron-config-env
cd electron-config-env
npm install
```

Edit stuff, run _npm test_, do git commit and push if all tests passed:

```bash
npm test
git commit -am '<message>'
git push
```

# Publish a new version

Create a new [version](http://semver.org) of the npm module. You can do that with the _npm version_ command, which will change the version number in
 package.json and tag it with the new release version number.

```bash
npm version <update_type> -m "<message>"
```

The _<update_type>_ is one of the following:
* patch 
* minor
* major.

_Example:_
```bash
npm version patch -m "version %s - did some stuff"
```
_%s_ is the new version number.

Now push to git and publish the new version to npm. 
```bash
git push --tags
npm login
npm publish
```