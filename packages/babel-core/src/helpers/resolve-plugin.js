import resolve from "./resolve";

export default function resolvePlugin(pluginName: string, dirname: string = process.cwd()): ?string {
  return resolve(`babel-plugin-${pluginName}`, dirname) || resolve(pluginName, dirname);
}
