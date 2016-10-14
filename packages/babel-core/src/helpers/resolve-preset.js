import resolve from "./resolve";

export default function resolvePreset(presetName: string, dirname: string = process.cwd()): ?string {
  let presetLoc = resolve(`babel-preset-${presetName}`, dirname) || resolve(presetName, dirname);

  // trying to resolve @organization shortcat
  // @foo/es2015 -> @foo/babel-preset-es2015
  if (!presetLoc) {
    let matches = presetName.match(/^(@[^/]+)\/(.+)$/);
    if (matches) {
      let [, orgName, presetPath] = matches;
      presetName = `${orgName}/babel-preset-${presetPath}`;
      presetLoc = resolve(presetName, dirname);
    }
  }
  return presetLoc;
}
