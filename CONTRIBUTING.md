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
git add .
git commit -m 'commit message'
git tag vx.y.z
git push origin master --tags

npm login
npm publish
```