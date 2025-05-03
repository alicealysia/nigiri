import { parseWithoutFormatting as ParseWithoutFormatting, parseAndTransform as ParseAndTransform } from '@bgotink/kdl/v1-compat'
import { parse as Parse } from '@bgotink/kdl'
import { readFileAsync as ReadFileAsync } from 'astal'

export enum KdlVersion {
    transformedFromV1,
    V1,
    V2
}

export default async (path: string, kdlVersion: KdlVersion) => {
    const fileContent = await ReadFileAsync(path);
    const parserList = {
        [KdlVersion.transformedFromV1]: ParseAndTransform,
        [KdlVersion.V1]: ParseWithoutFormatting,
        [KdlVersion.V2]: Parse
    };
    // Who would win? 1 switchy boi? or indexing an object with an enum :P
    return parserList[kdlVersion](fileContent);
}
