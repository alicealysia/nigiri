import kdl, { Xkb } from "./kdl";
import { readFileAsync as ReadFileAsync, readFile } from 'astal'

export default (path: string) => {
    const value = readFile(path);
    return {
        kdl: kdl(value)
    }
}

export { Xkb }
