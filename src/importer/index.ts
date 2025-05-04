import kdl from "./kdl";
import { readFileAsync as ReadFileAsync } from 'astal'

let importsList: Map<string, Promise<string>> = new Map<string, Promise<string>>();

export default (path: string) => {
    if (!importsList.has(path)) {
        const value = ReadFileAsync(path);
        importsList.set(path, value);
    }
    return {
        kdl: kdl(importsList[path]),
    }
}
