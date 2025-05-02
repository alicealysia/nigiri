import { parseWithoutFormatting, parseAndTransform } from '@bgotink/kdl/v1-compat'
import { parse } from '@bgotink/kdl'
import { readFileAsync } from 'astal'

export enum KdlVersion {
    transformedFromV1,
    V1,
    V2
}

export default async (path: string, kdlVersion: KdlVersion) => {
    const fileContent = await readFileAsync(path);
    const parserList = {
        [KdlVersion.transformedFromV1]: parseAndTransform,
        [KdlVersion.V1]: parseWithoutFormatting,
        [KdlVersion.V2]: parse
    };
    // Who would win? 1 switchy boi? or indexing an object with an enum :P
    return parserList[kdlVersion](fileContent);
}
