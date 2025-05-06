import { parseWithoutFormatting as ParseWithoutFormatting, parseAndTransform as ParseAndTransform } from '@bgotink/kdl/v1-compat'
import { parse as Parse } from '@bgotink/kdl'

export const ParserList = {
    ['v1 Transformed']: ParseAndTransform,
    ['v1']: ParseWithoutFormatting,
    ['v2']: Parse
};

export default (fileContent: Promise<string>) => async (kdlVersion: 'v1 Transformed' | 'v1' | 'v2') => {
    const content = await fileContent
    console.log(content)
    return ParserList[kdlVersion](content);
}


