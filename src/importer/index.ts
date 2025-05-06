import kdl from "./kdl";
import { readFileAsync as ReadFileAsync } from 'astal'

let importsList: Map<string, Promise<string>> = new Map<string, Promise<string>>();

export default (path: string) => {
    console.log(path);
    if (!importsList.has(path)) {
        console.log('not in list')
        const value = ReadFileAsync(path);
        console.log(value)
        importsList.set(path, value);
    }
    return {
        kdl: kdl(importsList[path]),
    }
}
