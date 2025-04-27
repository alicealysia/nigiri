import { parseWithoutFormatting } from '@bgotink/kdl/v1-compat'
import { readFileAsync } from 'astal'

export default async (path: string) => {
    const fileContent = await readFileAsync(path);
    return parseWithoutFormatting(fileContent);
}
